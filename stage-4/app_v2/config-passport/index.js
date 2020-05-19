
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const User = require('../model/User')

module.exports = (passport) => {

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
        done(null, user.id)
    })
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            if (err) throw err
            done(null, user)
        })
    })


}