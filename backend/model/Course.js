const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    level:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    lectures:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Lecture'
    }]
},{timestamps:true})

const Course = new mongoose.model("Course",courseSchema)
module.exports = Course