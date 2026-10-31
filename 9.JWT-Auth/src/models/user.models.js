const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:String,
    email:String,
    password:String,
})

const userModel = mongoose.model("userLoginData",userSchema );

module.exports = userModel;