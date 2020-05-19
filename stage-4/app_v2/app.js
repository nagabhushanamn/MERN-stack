var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport')
var mongoose = require('mongoose')
var configPassport = require('./config-passport')

var flash = require('express-flash')
var session = require('express-session')
var passport = require('passport')
var methodOverride = require('method-override')


var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

var app = express();

//--------------------------------------------------

const dbUrl = "mongodb+srv://user1:user11@cluster0-socov.mongodb.net/dashboard?retryWrites=true&w=majority"
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("connected with db")
  })
  .catch(err => {
    throw err
  })
//--------------------------------------------------

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(methodOverride('_method'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
app.use(flash());


configPassport(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRouter);

app.use((req, res, next) => {
  if (req.isAuthenticated())
    next()
  else
    res.redirect('/auth/login')
})

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
