
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//GET请求的参数在URL中，在原生node中需要使用url模块进行接收，在express的就不需要了。直接使用req.query对象接收。
//POST请求的参数在express中不能直接获得,需要使用body-parser模块,使用后将可以通过req.body得到参数,如果表单中有文件上传,还需要使用formidable模块。

//程序进来,当访问localhost:3000/这个路径，就进入。app.get('/')这个方法。打印req.query()为空集合。之后通过res.render('second'),找到views文件夹下面的second.ejs把页面渲染出来
//ejs模版引擎需要先设定。
//因为second.ejs文件里，form表达提交的路径是http:localhost:3000/doget,方法是get请求，这个就找到了app.get('/doget')这个方法。之后req.query就有参数了。
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    console.log('11111111111');
    console.log(req.query);
    //res.render('second');//get请求表达的ejs文件。
    res.render('three');

});

app.get('/doget', function (req, res) {
    console.log('33333333333');
    console.log(req.query);
    res.send('接收成功').end();


});



//post请求需要加上
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/doPost', function (req, res) {
    console.log('4444444444');
    console.log(req.body);
    res.send('接收成功').end();

});



app.listen(3000);
