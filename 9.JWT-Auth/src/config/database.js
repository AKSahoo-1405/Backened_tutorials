const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.DB_URI)
    .then((res)=>{
        console.log("Database connected...");
        
    })
}

module.exports = connectToDB;