const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.USER_ID)
    .then(()=>{
        console.log("Database server is Connected ....");
        
    })
}

module.exports = connectToDb;