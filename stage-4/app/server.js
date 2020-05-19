const express = require('express');
const bcrypt = require('bcrypt');
var flash = require('express-flash')
var session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

//------------------------------------------
const users = []
//------------------------------------------


const app = express();

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

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    const user = users.find(item => item.email === email)
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


}))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    const user = users.find(user => user.id === id)
    done(null, user)
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
        let newUser = {
            id: Date.now().toString(),
            email: req.body.email,
            password: hashPassword,
            name: req.body.name,
        }
        users.push(newUser)
        req.flash('message', "registred, login to cont..")
        res.redirect('/login')
    } catch (err) {
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

app.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login');
})

app.listen(3000, () => {
    console.log("server Up and listening")
})