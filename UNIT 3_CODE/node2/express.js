var express = require("express");
var app = express();
app.get("/", function(req, res) {
    //res.send("Welcome to Home Page" + req.method);
    //res.send("Welcome to Home Page" +req.originalUrl);
    res.send("Welcome to Home Page" +req.path);
})
app.get("/hello",function(req,res){
    res.send("Hi There"+ req.path);
})
app.get("/hello/:msg",function(req,res){
    res.send("Hi There "+ req.params.msg);
})
app.listen(3000);