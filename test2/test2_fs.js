//文件读取的联系
var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    
    res.writeHead(200,{"content-type":"text/html;charset=utf8"});

    var randNum = parseInt(Math.random() * 89999) + 10000;
    console.log(randNum);
    //读取文件
    fs.readFile('./doc/1.txt','utf8',function(err,data){
        if (err) {
            throw err;
        }
        console.log('随机数为:'+randNum+',内容:'+data);
    })
    
    //查找一个文件夹，里面的一个文件，如果不存在就创建，并且写入内容
    if(!fs.existsSync('./doc/abc')) {
        fs.mkdirSync('./test2/doc/'+'abc');
        console.log('文件夹创建成功!');
    }
    
    if (!fs.existsSync('./doc/abc/haha.txt')) {
        fs.writeFileSync('./test2/doc/abc/haha.txt','This is Three file');
        console.log('文件创建成功');
    }

    res.end('读取成功');


}).listen(3000,'192.168.0.44');