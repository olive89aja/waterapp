var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// This let's the serer know where the react lives
const BUNDLE = path.resolve(__dirname, "../client/build", "index.html");
// This lets the server know where the public/ directory is
app.use("/", express.static(path.join(__dirname, "../client", "build")));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get("/test", (req, res) => {
  res.status(200).send({ success: new Date() })
});

app.get("*", (req, res) => {
  res.sendFile(BUNDLE)
});

module.exports = app;
