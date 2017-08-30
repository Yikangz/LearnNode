//1,读取testFile里面的文件夹。把文件夹名存入数组。
//2,在测试的过程中了解nodejs的异步调用。

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
        for (var i = 0; i < data.length; i++) {
            var thefilename = data[i];
            console.log(thefilename);
            //检测如果是文件夹保存到数组

            fs.stat('./testFile/' + thefilename, function (err, stats) {
                //如果是文件夹,就把名字记录下来
               // console.log(stats.isDirectory());
                if (stats.isDirectory()) {
                    dirs.push(thefilename);
                }
                console.log(dirs);
            })
        }
        

    })

    res.end('读取成功');


}).listen(3000, '127.0.0.1');