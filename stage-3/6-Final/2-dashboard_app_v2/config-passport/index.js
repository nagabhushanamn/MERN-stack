
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy

const User = require('../model/User')

module.exports = (passport) => {


    passport.use(new FacebookStrategy({
        clientID: "896282104178969",
        clientSecret: "d368c852f209d1d4fb2292cd639e5414",
        callbackURL: "/auth/facebook/callback"
    }, (accessToken, refreshToken, profile, done) => {
        // save this profile in our database if not exist
        done(null, profile)
    }
    ));

    passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        User.findOne({ email: email }, async (err, result) => {
            if (err) throw err
            let user = result
            if (!user) {
                done(null, false, { message: 'email does not exist' })
                return
            }
            try {
                let isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    done(null, false, { message: 'incorrect credentials' })
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
        // done(null, user.id)
        console.log(user)
        let u={
            id:user.id,
            name:user.provider==='facebook'?user.displayName:user.name,
        }
        done(null, u)
    })

    passport.deserializeUser((user, done) => {
        // User.findById(id, (err, user) => {
        //     if (err) throw err
        //     done(null, user)
        // })
        done(null,user)
    })


}