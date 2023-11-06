var fs = require('fs')
var http = require('http')
var url = require('url')
http.createServer(function(request,response){
    if(request.method=="POST")
    {
        var myurl = url.parse(request.url);
        var pathname = myurl.pathname;
        let body = [];
        request.on("data", (chunk)=>{
            body.push(chunk);
            console.log(chunk.toString())
        })
        request.on('end',()=>{
            body = Buffer.concat(body).toString();
            console.log(body);
            fs.writeFile(pathname.substr(1),body,(err,res)=>{
                response.writeHead(200,{'content-type':'text/plain'});
                response.end("Message Saved");
            })
        })
    }
}).listen(8080);
console.log("Server is up and running");