const mongoose = require("mongoose")

const instructorSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:["Instructor","Admin"],
        default:"Instructor"
    }
},{timestamps:true})

const Instructor = new mongoose.model("Instructor",instructorSchema)
module.exports = Instructor;