var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./db')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cryptoRouter = require('./routes/cryptoRouter')
var otpRouter = require('./routes/otpRouter')
var notificationRouter = require('./routes/notification.router')
var userContact = require('./routes/userContact.router')

var app = express();
db.dbConnection()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user-contact', userContact)
app.use('/otp', otpRouter);
app.use('/crypto', cryptoRouter)
app.use('/notification', notificationRouter)

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
