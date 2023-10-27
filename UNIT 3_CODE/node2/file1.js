var fs = require('fs');
const { stdin } = require('process');
console.log("Going to open the file");
/*fs.open('test.txt', 'r+', function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data);
    console.log("File opened successfully!");
})*/
/*fs.appendFile('test.txt','PES UNIVERSITY',function(err){
    if(err)
    {
        return console.error(err);
    }
    console.log("Data written successfully");
})*/
/*fs.open('test.txt','r+',function(err,fd){
    if(err)
    {
        return console.error(err);
    }
    var buf = new Buffer(1024);
    console.log("File opened successfully!");
    fs.ftruncate(fd,3,function(err){
        if(err)
        {
            console.log(err);
        }
        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err) throw err
            if(bytes>0){
                console.log(buf.slice(0,bytes).toString());
            }
            fs.close(fd,function(err){
                if(err) throw err;
            })
        })
    })
})*/
/*fs.unlink('test.txt',function(){
    console.log("File deleted successfully");
})*/
/*var data = fs.readFileSync('test.txt','utf-8');
var lines = data.split(/\r?n/);
lines.forEach((line)=>{
    var words=line.split(',');
    console.log(words[2]);
});*/
/*var readline = require('readline');
var rl = readline.createInterface({
    input:fs.createReadStream('test.txt'),
    output: process.stdout,
    terminal:false
})
rl.on('line',function(line){
    var words = line.split(',');
    console.log(words[0]);
})*/
var readline = require('readline');
var rl = readline.createInterface({
    input:stdin,
    output: process.stdout,
    terminal:false
})
rl.on('line',function(line){
    var words = line.split(',');
    console.log(words[0]);
})