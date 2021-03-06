var express = require('express');
var app = express();

app.get('/admin/login', function (req, res) {
    console.log('222222222222');
    res.send('管理员登录');
});

//路由的顺序也是有关系的,从上往下执行,越精确的放在最前,模糊的跟在后面。
//或者模糊的在前,给前面的参数加入next即可。
app.use('/:admin/:pwd', function (req, res, next) {

    var username = req.params.admin;
    var password = req.params.pwd;
    console.log(username + 'username');
    console.log(password + 'pwd');
    console.log(req.url);
    if (username == 'admin' && password == '123123') {
        res.send('登陆成功,欢迎' + username);
    } else {
        console.log('进入next');
        next();
    }

});

app.get('/admin/login', function (req, res) {
    console.log('222222222222')
    res.send('管理员登录');
});

//app.use的执行顺序是按照程序的顺序又上到下。
//会经过一个app.use中间件，没有匹配到路径就会去找默认的。
app.use(function (req, res) {
    console.log('333333333333');
    //res.status(404).send('没有这个页面');
    res.sendStatus(404);
});

app.listen(3000);