var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('qs');
http.createServer(function(request,response){
    //response.writeHead(200,{'Content-Type':'text/plain'});
    //response.write("Welcome to my domain\n");
    //response.end("Welcome to web server\n");
    if(request.method == 'GET'){
        var myurl = url.parse(request.url);
        var pathname = myurl.pathname;
        if(pathname=='/'){
            pathname = '/index.html';
        }
        fs.readFile(pathname.substr(1),'utf-8',function(err,data){
            if(err){
                response.writeHead(404,{'Content-Type':'text/html'});
                response.write("<h1> File not found </h1> ");
                response.end();
            }
            else{
                response.writeHead(200,{'Content-Type':'text/html'});
                var lines = data.split(/\r?\n/);
                
                var query = myurl.query // ?srn=1234
                var qobj = qs.parse(query); // {"srn:1234"}
                for(var i in lines){
                    var obj = JSON.parse(lines[i])
                if(obj.srn==qobj.srn){
                    response.write("<h1>"+obj.name+"</h1>");
                }
                response.write(data);
                response.end();
            }
            }
        })
    }
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");