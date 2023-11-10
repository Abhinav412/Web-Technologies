var http=require('http');
var url=require('url')
var fs=require('fs');
var qs=require('querystring')
var MongoClient= require('mongodb').MongoClient;
http.createServer(function(request,response){
    if(request.method=='GET'){
        var myurl=url.parse(request.url);
        var url1='mongodb://127.0.0.1:27017'
    MongoClient.connect(url1)
    .then((connectedClient)=>
    {
        client=connectedClient
    })
    .then(()=>
    {
       let result
       //const data={name:"Orange"}
       //const newvalue={$set:{name:"Rohit"}}
        const collection=client.db("university").collection("student")
        return collection.find().toArray(result)
    })
    .then((result)=>{
        //console.log("document updated")
        console.log(result)
        client.close()
    })
    .catch((err)=>{
        console.log(err)
    
    })
}
}).listen(8080);

console.log("Server is up and running")