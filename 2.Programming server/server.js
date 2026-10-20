const express = require("express");

const app = express()

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.get('/home',(req,res)=>{
    res.send("Iam home page ");
})
app.get('/about',(req,res)=>{
    res.send("Iam about page ");
})

app.listen(3000);