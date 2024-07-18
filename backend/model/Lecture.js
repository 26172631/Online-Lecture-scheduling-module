const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    instructorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Instructor'
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }
},{timestamps:true})

const Lecture = new mongoose.model("Lecture",lectureSchema)

module.exports = Lecture;