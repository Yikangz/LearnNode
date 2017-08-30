//1,读取testFile里面的文件夹。把文件夹名存入数组。

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    //小图标去掉
    if (req.url == '/favicon.ico') {
        return;
    }
    res.writeHead(200, { "content-type": "text/html;charset=utf8" })
    //用于存文件夹名的数组
    var dirs = ['1.txt', '2.txt', '3.txt', '4.txt'];
   /*  for (var i = 0; i < dirs.length; i++) {
        (function (i) {
            fs.readFile('./testFile/'+dirs[i], 'utf-8', function (err, contents) {
                console.log(dirs[i] + ': ' + contents);
            });
        })(i);
    } */

    //使用forEach异步转同步
    dirs.forEach(function(filename){
        fs.readFile('./testFile/'+filename, 'utf-8', function (err, contents) {
            console.log(filename + ': ' + contents);
        });
    })

    res.end('读取成功');


}).listen(3000, '127.0.0.1');