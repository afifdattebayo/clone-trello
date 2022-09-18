var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors")

var todosRouter = require('./app/api/todos/router');
var itemsRouter = require('./app/api/items/router');

var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const URL = '/api/v1';

app.use(URL, todosRouter);
app.use(URL, itemsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("not found")
  err.status = 404;
  next(err)
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({ message: err.message })

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
