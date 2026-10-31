const express = require("express");
const noteModel = require("./models/notes.model")
const cors = require("cors");
const path =require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('./public/assets'))
app.use(express.static('./public'))

app.post('/api/note',async (req,res)=>{
    const {title,description} = req.body;
    const note = await noteModel.create({
        description,title
    })
    console.log(req.body);
    
    res.status(201).json({
        message:"note added succesfully",
        note
    })
})

app.get('/api/note',async (req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        notes
    })
})

app.delete('/api/note/:id',async (req,res)=>{
   let delnote= await noteModel.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message:"deleted successfully",
        delnote
    })  
})

app.patch('/api/note/:id',async (req,res)=>{
    const {description} = req.body;
    await noteModel.findByIdAndUpdate(req.params.id,{
        description
    });
    const notes = await noteModel.findById(req.params.id)
    res.status(200).json({
        message:"note updated",  
        notes
    })
})
// console.log(__dirname);


// app.use('*name',(req,res)=>{
//     res.send("This is wild card api call.")
// })

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','/public/index.html'));
})

module.exports= app;