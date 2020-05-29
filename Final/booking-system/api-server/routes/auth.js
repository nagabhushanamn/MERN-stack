const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const UserModel = require('../model/User')

const router = express.Router();

router.post('/register', async (req, res, next) => {

  let newUser = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    mobile: req.body.mobile,
    dob: moment(req.body.dob).format('DD-MM-YYYY'),
    gender: req.body.gender
  }
  // validate
  try {
    const savedUser = await UserModel.create(newUser)
    res.json({
      message: 'Signup successful',
      user: savedUser
    });

  } catch (err) {
    next(err)
  }

});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        console.log(user)
        res.status(401).json({ message: info.message })
        return
      }
    
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error)
        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        const body = { _id: user._id, email: user.email };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user: body }, 'top_secret');
        //Send back the token to the user
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;