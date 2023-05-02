var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./db');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const DanhMuc = require('./routes/DanhMuc')
const DongHo = require('./routes/DongHo');
const tinhRouter = require('./routes/Tinh');
const muaHang = require('./routes/MuaHang');
const dcRouter = require('./routes/DiaChi');
const fileUpload = require('express-fileupload');
const cors = require('cors')
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload({  createParentPath: true}));
app.use(cors());
app.use('/DanhMuc', DanhMuc);
app.use('/DongHo', DongHo);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/payment', muaHang);
app.use('/Tinh', tinhRouter);
app.use('/DC', dcRouter);
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
db.connect();
module.exports = app;
