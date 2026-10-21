
const app = require("./src/app");
const mongoose = require("mongoose");

function connetToDb(){
    mongoose.connect("connection string")
    .then(()=>{
        console.log("Database connected");
        
    })
}
connetToDb();



app.listen(3000,()=>{
    console.log("Server is Started on port 3000....");
    
})