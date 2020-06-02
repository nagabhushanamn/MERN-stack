
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const busRoute = require('./routes/bus');
const seatsRoute = require('./routes/seats');


const app = express();

mongoose.connect('mongodb+srv://user1:user11@cluster0-socov.mongodb.net/booking-system?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', error => console.log(error));


app.use(cors())

require('./auth-config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', authRoute);

//We plugin our jwt strategy as a middleware so only verified users can access this route
// app.use(passport.authenticate('jwt', { session: false }))
app.use('/user/profile', profileRoute);
app.use('/bus', busRoute);
app.use('/seats', seatsRoute);

//Handle errors
app.use(function (err, req, res, next) {
    throw err
});

module.exports = app;
