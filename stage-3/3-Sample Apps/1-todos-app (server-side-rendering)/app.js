var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var todosRouter = require('./routes/todos');
var usersRouter = require('./routes/users');

var app = express();



app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.redirect("/todos")
})

app.use('/todos', todosRouter);
app.use('/users', usersRouter);

module.exports = app;

