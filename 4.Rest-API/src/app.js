

// server is created
//server config

const express = require("express");
const app = express();

app.use(express.json());

const notes=[];
//put
app.post('/note',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    console.log(notes);
    
    res.send("Data is Stored");
})

// method- get, api name/endpoint - /note
app.get('/note',(req,res)=>{
    console.log("get method recieved")
    res.send(notes);
})

// request body is used to send big data from client to serve.
// wheras, params are used to send small data.
app.delete('/note/:index',(req,res)=>{
    delete notes[req.params.index]; 
    console.log(req.params.index);
    res.send("note is deleted");
    
})


app.patch('/note/:idx',(req,res)=>{
    notes[req.params.idx].Description = req.body.Description;
    res.send("modified completed");
})



module.exports = app;