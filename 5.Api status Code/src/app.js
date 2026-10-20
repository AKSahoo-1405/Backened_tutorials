const express = require("express");
const app = express();

app.use(express.json());

const notes=[];

app.post('/note',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    
    res.status(201).json({
        "message":"note is pushed"
    });
})

app.get('/note',(req,res)=>{
    res.status(200).json({
        "notes_recieved":notes
    });
})


app.delete('/note/:id',(req,res)=>{
    //this will send no content
    // res.status(204).json({
    //     "message":'note deleted successfully',
    //     "note": notes[req.params.id]
    // });
    res.status(200).json({
        "message":'note deleted successfully',
        "note": notes[req.params.id]
    });

    delete notes[req.params.id];
});

app.patch('/note/:id',(req,res)=>{
    notes[req.params.id].Description = req.body.Description;
    res.status(200).json({
        "Description Changed":req.params.id
    })
})



module.exports = app;