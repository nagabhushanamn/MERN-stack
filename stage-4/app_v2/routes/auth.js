var express = require('express');
var router = express.Router();
var passport = require('passport')

router
  .get('/login', function (req, res, next) {
    res.render('login')
  })
  .post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true
  }))

module.exports = router;
