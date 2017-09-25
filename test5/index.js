var http = require('http');
var abc = require('abc');

http.createServer(function(req,res){
    
	if (req.url == '/favicon.ico'){
		return ;
	}

    res.writeHead(200,{'content-type':'text/xhtml;charset=utf8'})
	console.log('abc:'+abc.run)
	res.end('HelloWorld');


}).listen(3000,'127.0.0.1');