var http = require('http');

http.createServer(function (req, res) {

    //得到url
    var userurl = req.url;
    res.writeHead(200,{"content-type":"text/html;charset=utf8"});
    if (userurl.substr(0, 9) == '/student/') {

        //如果学号是8位打印学号，否则提示学号有误
     
        var userid = userurl.substr(9);
       
        //正则校验位数。
        if (/^\d{8}&/.test(userid)) {
            res.end('您所要查询的学生信息id为：' +userid);
        } else {
            res.end('您输入的学号有误');
        }
    } else if (userurl.substr(0, 9) == '/teacher/') {
        //如果教师号是7位就打印，否则提示教师号有误。
        var teacherid = userurl.substr(9);
       
        if (/^\d{7}$/.test(teacherid)) {
            res.end('您输入的教师号为：' + teacherid);
        }else {
            res.end('您输入的教师号有误');
        }

    } else {
        res.end('请检查url');
    }
}).listen(3000,'127.0.0.1');