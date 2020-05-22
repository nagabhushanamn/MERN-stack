const express = require('express');
const bcrypt = require('bcrypt');
var flash = require('express-flash')
var session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
var methodOverride = require('method-override')
const mongoose = require('mongoose')

const DB_URL = "mongodb+srv://user1:user11@cluster0-socov.mongodb.net/dashboard?retryWrites=true&w=majority"
 
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        throw err
    })

// --------------------------------------------------

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema)

// --------------------------------------------------

//------------------------------------------
// const users = []
//------------------------------------------


const app = express();

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))
app.use(flash());

app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: false })) // to read request.body data


//---------------------------------------------
//  passport configuration
//---------------------------------------------

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    //const user = users.find(item => item.email === email)
    User.findOne({ email: email }, async (err, result) => {
        if (err) throw err
        let user = result
        if (!user) {
            done(null, false, { message: 'User not found' })
            return
        }
        try {
            let isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                done(null, false, { message: 'incorrect password' })
            }
            else {
                done(null, user)
            }
        } catch (err) {
            done(err)
        }
    })


}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    // const user = users.find(user => user.id === id)
    User.findById(id, (err, user) => {
        if (err) throw err
        done(null, user)
    })
})

//---------------------------------------------

app.use(passport.initialize())
app.use(passport.session())

//----------------------------------------------

app.get("/register", (req, res) => {
    res.render('register')
})

app.post("/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.post("/register", async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)

        let user = {
            email: req.body.email,
            password: hashPassword,
            name: req.body.name,
        }

        const newUser = new User(user)
        newUser.save((err) => {
            req.flash('message', "registred, login to cont..")
            res.redirect('/login')
        }) // db.users.insertOne(user)


    } catch (err) {
        console.log(err)
        res.redirect('/register')
    }
})
app.get("/login", (req, res) => {
    const message = req.flash('message')
    res.render('login', { message })
})

app.use((req, res, next) => {
    if (!req.isAuthenticated())
        res.redirect("/login")
    else next()
})

app.get("/", (req, res) => {
    res.render('index', { user: req.user.name })
})

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login');
})

app.listen(3000, () => {
    console.log("server Up and listening")
})