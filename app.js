var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const session = require('express-session');
const {v4:uuidv4} = require('uuid');
const favicon = require('express-favicon');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var satelitesRouter = require('./routes/adminsatelite');
var estrellasRouter = require('./routes/adminsestrella');
var loginRouter = require('./routes/login');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use (session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/administration', adminRouter);
app.use('/satelites', satelitesRouter);
app.use('/estrellas', estrellasRouter);
app.use('/route', loginRouter);
app.get('/autenticacion', (req,res) => {
  res.render('auth', {title: 'SS3D - AUTH'})
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
