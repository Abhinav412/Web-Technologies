/*console.log("Welcome to Node JS");
const name1 = "Abhinav"
console.log("Hello",name1);
setTimeout(()=>{
    console.log("Timer stopped")
},2000);
console.log("Timer started");*/
const fs = require('fs');
/*fs.stat("input.txt",(err,data)=>{
    if(err) throw err
    console.log("Statistics of the file",data);
    console.log("Statistics of the file",JSON.stringify(data));
})*/
/*fs.rename("input.txt","New_input.txt", (err)=>{
    console.log("Rename sucessful");
    fs.stat("New_input.txt",(err,data)=>{
        if(err) throw err
        console.log("Statistics of the file",data);
        console.log("Statistics of the file",JSON.stringify(data));
    if(err) throw err
})})*/
/*.readFile("New_input.txt","UTF-8",(err,data)=>{
    if(err) throw err;
    console.log("Contents of the file",data);
})
console.log("Reading the contents of the file");
*/
/*const data = fs.readFileSync("New_input.txt","UTF-8");
console.log("Contents of the file are",data);
console.log("Reading the contents of the file");
console.log("End of the file");*/
fs.readFile("New_input.txt",function(err,data){
    if(err)
    {
        console.log(err);
    }
    setTimeout(()=>{
        console.log("WEB TECH")
    },2000)
})
console.log("Starts Here")