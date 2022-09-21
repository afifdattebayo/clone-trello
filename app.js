const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const todosRouter = require('./app/api/todos/router');
const itemsRouter = require('./app/api/items/router');

const app = express();
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
