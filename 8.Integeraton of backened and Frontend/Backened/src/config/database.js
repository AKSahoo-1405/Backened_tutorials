const mongoose= require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.USER_ID)
    .then(()=>{
        console.log("Databse is connected....");      
    })
}

module.exports = connectToDb;