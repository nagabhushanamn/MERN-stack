var express = require('express');
var router = express.Router();
var passport = require('passport')
var bcrypt = require('bcrypt')
var User = require('../model/User')

router
  .get('/facebook', passport.authenticate('facebook'))
  .get('/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    })
  .get('/register', (req, res) => {
    res.render('register')
  })
  .get('/login', function (req, res, next) {
    res.render('login', { message: req.flash('message') })
  })
  .post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true
  }))
  .post('/register', async (req, res, next) => {
    try {
      let hashPassword = await bcrypt.hash(req.body.password, 10)
      let userDet = {
        email: req.body.email,
        password: hashPassword,
        name: req.body.name
      }
      let newUser = new User(userDet)
      newUser.save(err => {
        req.flash('message', "account has been created, log-in to continue")
        res.redirect('/auth/login')
      })
    } catch (err) {
      res.redirect('/auth/register')
    }

  })
  .delete('/logout', (req, res) => {
    req.logOut()
    res.redirect("/")
  })

module.exports = router;
