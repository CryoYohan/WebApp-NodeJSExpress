 const express = require('express');
 const app = express();
 const port = 9000;

 // Define a router 
 app.get('/',(req,res)=>{
    res.send('Hello world!')
 })

 // Start SERVER
 app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
 });