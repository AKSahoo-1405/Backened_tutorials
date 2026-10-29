const mongoose = require("mongoose");
//defining schema
const noteSchema = new mongoose.Schema({
    title:String,
    description:String,
    age:Number
})
//colection
const noteModel = mongoose.model("notes",noteSchema);

module.exports=noteModel;

