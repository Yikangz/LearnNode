

/**
 * 内容:文件上传,文件名修改,并且加后缀
 */


var http = require('http');
var querystring = require('querystring');
var formidable = require('formidable');
var moment = require('moment');
var path = require('path');
var fs = require('fs');

http.createServer(function (req, res) {

    if (req.url == '/upLoadForm' && req.method.toLowerCase() == 'post') {

        var form = new formidable.IncomingForm();//创建一个新的传入表单
        form.uploadDir = "./temp";//设置文件上传的路径

        form.parse(req, function (err, fields, files) {
            console.log(files);
            if (err) {
                throw err;
            }
            var extname = path.extname(files.tupian.name);
            var UnixTime = moment().format('X');
            var randNum = parseInt(Math.random() * 89999 + 10000);
            var oldName = __dirname + '/' + files.tupian.path;
            var newName = __dirname + '/temp/' + UnixTime + randNum + extname;
            fs.rename(oldName, newName, function (err) {
                if (err) {
                    throw Error('改名不成功,嘿嘿嘿');
                }
                res.writeHead(200, { 'content-type': 'text/xhtml;charset=utf8' });
                res.end('上传成功!');
            });

        });

    } else if (req.url == '/') {
        fs.readFile('./upload.html', function (err, data) {
            if (err) {
                throw Error('读取upload.html失败')
            }
            res.writeHead(200, { 'content-type': 'text/html;charset=utf8' });
            res.end(data);
        })

    } else {
       /*  fs.readFile('./test4/fileDir/404.html', function (err, data) {
           console.log('hhahaha');
            res.writeHead(404, { 'content-type': 'text/html;charset=utf8' });
            res.end(data);
        }); */
        res.writeHead(404, { 'content-type': 'text/html;charset=utf8' });
        res.end('没有找到该页面');
    }

}).listen(3000, '127.0.0.1');