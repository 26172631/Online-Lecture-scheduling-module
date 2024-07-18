const Course = require("../model/Course")

const createCourse = async(req,res)=>{
    try{
        const course = await Course.create(req.body)
        return res.json({success:true, message:"Course created successfully"})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}
const getAllCourse = async(req,res)=>{
    try{
        const courses = await Course.find().populate('lectures')
        // const courses = await Course.find()
        return res.json({success:true,message:"Courses Fetched Successfully", courses})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}
module.exports = {createCourse,getAllCourse}