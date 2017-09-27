var http = require('http');
var querystring = require('querystring');

http.createServer(function (req, res) {

    if (req.url == '/doPost' && req.method.toLowerCase() == 'post') {
        var alldate = '';
        req.addListener('data', function (chunk) {
            alldate += chunk;
           
        });

        req.addListener('end', function () {
            //console.log(alldate);
            var mydata = querystring.parse(alldate);
            console.log(mydata);
            console.log('姓名:'+mydata.name);
            console.log('性别:'+mydata.sex);
            console.log('爱好:'+mydata.hobby);
            res.end('success');
        })
    }

}).listen(3000, '127.0.0.1');