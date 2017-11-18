var express = require('express');

var app = express();
var Croutes = require('./controller');


//设置模版引擎
app.set("view engine","ejs");

//设置静态文件目录
app.use(express.static('./public'));
app.use(express.static('./uploads'));



app.get('/',Croutes.showIndex);

app.get('/:xiangce',Croutes.showPhone);

app.get('/up',Croutes.showUpDir);
app.post('/up',Croutes.doPost);

app.use(function(req,res){
    
    res.render("err");
    
});


app.listen(3000);