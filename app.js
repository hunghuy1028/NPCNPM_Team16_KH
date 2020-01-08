var createError = require('http-errors');
var express = require('express');
var path = require('path');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require("mongoose");

const session = require('express-session');

var app = express();

mongoose.connect('mongodb+srv://admin123:admin123@cluster0-zdvf1.mongodb.net/movie?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).
then(
    () => {
        console.log('KN THANH CONG')
 
    },
    err => { /** handle initial connection error */
        console.log(err);
    }
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //     secure: true
  // }
}))

app.use(flash());
app.use(async (req, res, next) =>
{
  res.locals.error_msg = req.flash('error_msg');
  next();
})

app.use((req, res, next) => {
  if (typeof (req.session.isAuthenticated) === 'undefined') {
    req.session.isAuthenticated = false;
  }
  res.locals.isAuthenticated = req.session.isAuthenticated;
  res.locals.authUser = req.session.authUser;
  next();
})

var indexRouter = require('./routes/index');
var staffRouter = require('./routes/staff');
var movie = require('./routes/movie');

app.use('/movies', movie);
app.use('/', indexRouter);
app.use('/staff', staffRouter);


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
