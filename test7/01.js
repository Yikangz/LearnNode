var express = require('express');//引入express框架

var app = express();//相当于使用express这个函数

//app.get()是一个中间件，制作一个路由,指定一个路径
app.get('/first', function (req, res) {
    res.render('first',{
        'news': ['express框架','ejs模版引擎','express可以有静态伺服的能力']
    });

});

//制作第二个路由,指定路径。
//验证学生学号是否是8位数
app.get('/student/:xuehao', function (req, res) {
    var xuehao = req.params.xuehao;
    if (/^\d{8}$/.test(xuehao)) {
        res.send('学生信息:'+req.params.xuehao);
    }
    res.send('无该学生信息');
})


//指定根目录为静态文件
app.use(express.static("./public"));

//指定模板引擎
app.set('view engine','ejs');


app.listen(3000, '127.0.0.1');
