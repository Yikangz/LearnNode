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
    var dirs = [];
    fs.readdir('./testFile', function (err, data) {
        //data是个文件名和文件夹名称的数组
        //迭代器就是强行把异步的函数，变成同步的函数
        console.log("进来了————————");
        (function iterator(i) {
            //遍历结束
            if (i == data.length) {
                console.log(dirs);
                return;
            }
            fs.stat('./testFile/' + data[i], function (err, stats) {
                //如果是文件夹,就把名字记录下来
                // console.log(stats.isDirectory());
                if (stats.isDirectory()) {
                    dirs.push(data[i]);
                }
                console.log("i头部"+i);
                iterator(i+1);
                console.log("i尾部"+i);
            });
        })(0);


    });

    res.end('读取成功');


}).listen(3000, '127.0.0.1');