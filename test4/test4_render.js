var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
    //console.log(req);

    var pathname = url.parse(req.url).pathname;

    if (req.url == '/favicon.ico') {
        return;
    }

    if (pathname == '/') {
        pathname = 'index.html';
    }

    var extname = path.extname(pathname);

    console.log(extname);

    fs.readFile('./fileDir/' + pathname, function (err, data) {
         if (err) {

            //读取错误页面
            fs.readFile('./fileDir/404.html', function (err, data) {
                res.writeHead(200, { 'content-type': 'text/html;charset=utf8' });
                res.end(data);
            });
            return;
        } 
        
        getMime(extname, function (mime) {
            console.log('123123' + mime);
            res.writeHead(200, { "content-type": mime });
            res.end(data);
        });

       

    });


}).listen(3000, '127.0.0.1');

function getMime(extname, callback) {

    var datas = fs.readFile('./fileDir/mime.json', 'utf8', function (err, data) {

        if (err) {
            //读取错误页面
            res.writeHead('404', { 'content-type': 'text/html;charset=utf8' })
            res.end('404,没有找到mime!!');
            return;
        }

        var result = JSON.parse(data);
        var mime = result[extname] || 'text/plain';
        console.log('111111' + mime);
        callback(mime);
    });





    /*  switch(extname){
        case ".html" :
            return "text/html";
            break;
        case ".img" :
            return "image/jpg";
            break;
    }  */
}
