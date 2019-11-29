var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fake:user@cluster0-opu94.mongodb.net/surveys?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', () => console.log("Failed to connect to MongoDB"));
db.once('open', () => console.log("Connection to MongoDB was successful"));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var surveysRouter = require('./routes/surveys');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/surveys', surveysRouter);

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

app.use(express.static('public'));

app.get('/js/apps.js', function (req, res) {
  res.sendFile(path.join(__dirname + '/js/app.js'));
});

module.exports = app;
