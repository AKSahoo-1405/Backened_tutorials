
const express = require("express"); //functionality of express into express

const app = express(); //create an instance of server into app.

app.use(express.json())  // normally server with express cannot read the request body, but it can read with this middleware

const notes=[]

//Route
app.post("/notes", (req,res)=>{
    console.log(req.body)

    notes.push(req.body)

    res.send("Note created")

})


app.get("/notes",(req,res)=>{
    res.send(notes)
    console.log("client recieve successfull")
})


app.listen(3000 ,()=>{   // Start the server on port 3000
    console.log("server is started on port 3000....")  // with callback function whiuch execute when server starts running
}) 