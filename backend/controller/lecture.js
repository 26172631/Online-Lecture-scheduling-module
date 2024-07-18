const Course = require("../model/Course");
const Lecture = require("../model/Lecture");

const assignCourse = async(req,res)=>{
    try{
        const existingLecture = await Lecture.findOne({ date:req.body.date, instructorId: req.body.instructorId });
        if (existingLecture) {
            return res.json({ message: 'Instructor is already assigned a lecture on this date.'});
        }
        const lecture = new Lecture({ date:req.body.date, instructorId: req.body.instructorId, courseId: req.body.courseId });
        await lecture.save();
        const course = await Course.findById({_id: req.body.courseId});
        course.lectures.push(lecture);
        await course.save();
        return res.json({success:true, message:"Lecture assign successfully"})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}

const getAlllecture = async(req,res)=>{
    try{
        const lecture = await Lecture.find().populate('instructorId').populate("courseId");
        return res.json({success:true,message:"Lecture Fetched Successfully", lecture})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}

const instructorLecture = async(req,res)=>{
    try{
        const { instructorId } = req.params;
        const lecture = await Lecture.find({instructorId:instructorId }).populate("courseId");
        return res.json({success:true,message:"Lecture Fetched Successfully", lecture})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}
module.exports = {assignCourse,getAlllecture,instructorLecture}