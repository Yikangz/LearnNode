var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));//加载日志中间件。
app.use(bodyParser.json());//加载解析json的中间件。
app.use(bodyParser.urlencoded({ extended: false }));//加载解析urlencoded请求体的中间件。
app.use(cookieParser());//加载解析cookie的中间件。
app.use(express.static(path.join(__dirname, 'public')));//设置public文件夹为存放静态文件的目录。

//app.use('/', index);
index(app);//另一种写法

app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);//如果使用了 next(error)，则会返回错误而不会传递到下一个中间件
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
