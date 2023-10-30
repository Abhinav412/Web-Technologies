/*const buf1 = Buffer.alloc(10,"hi");
const buf2 = Buffer.alloc(10,"Hi welcome");
const buf3 = Buffer.alloc(17,"to PES University");
console.log(buf1);
console.log(buf1.toString());
console.log(buf2.toString());
console.log(buf3.toString());
const totallength = buf2.length+buf3.length;
console.log(totallength);
const buf4 = Buffer.concat([buf2,buf3],totallength);
console.log(buf4.toString());
*/
//Compare and copy
/*const buf2 = Buffer.alloc(10,"Hi welcome");
const buf3 = Buffer.alloc(10,"Hi welcome");
var result = buf2.compare(buf3);
if(result < 0)
{
    console.log(buf2 +" comes before "+buf3);
}
else if(result == 0)
{
    console.log(buf2 +" is same as "+buf3);
}
else
{
    console.log(buf2 +" comes after "+buf3);
}
var buf5 = Buffer.alloc(25);
buf2.copy(buf5);
console.log("Buffer 2 content is copied into Buffer 5 " + buf5.toString());
*/
//Read stream
/*var fs = require("fs");
var data = '';
//create a readable stream
var readStream = fs.createReadStream('data.txt');
readStream.setEncoding('UTF8');
readStream.on('data',function(chunk){
    data += chunk;
})
readStream.on('end',function(chunk){
    console.log(data);
})
readStream.on('err',(chunk)=>{
    console.log(err.stack);
})
*/
//write stream
/*var fs = require("fs");
var data = "WEB TECH REACT JS, NODE JS";
var writestream = fs.createWriteStream("data.txt");
writestream.write(data,'UTF8');
writestream.end();
writestream.on('finish',function(){
    console.log("Write completed");
})
writestream.on('error',function(err){
    console.log(err.stack);
})
console.log("Program ended");*/
//chaining the streams
var fs = require("fs");
var zlib = require("zlib");
/*fs.createReadStream('data.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('data.txt.gz'));
console.log("File compressed");*/
fs.createReadStream('data.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('data.txt'));
console.log("File decompressed");