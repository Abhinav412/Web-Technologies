var fetch = require('node-fetch');
fetch('http://localhost:8080/file.txt',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({"name":"Abhinav","srn":"017"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))