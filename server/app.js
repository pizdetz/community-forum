var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { notFound, errorHandler } = require('./middleware');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the community!',
  });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
