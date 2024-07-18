const Instructor = require("../model/Instructor")
const bcrypt = require("bcryptjs");

const createInstructor = async(req,res)=>{
    try{
        const instructor = await Instructor.findOne({email:req.body.email})
        if(instructor){
            return res.json({success:false, message:"Instructor already exists"})
        }
        req.body.password = bcrypt.hashSync(req.body.password)
        const newInstructor = await Instructor.create(req.body)
        return res.json({success:true, message:"Instructor created successfully", instructor:newInstructor})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}
const instructorLogin = async(req,res)=>{
    try{
        const  instructor= await Instructor.findOne({email:req.body.email})
        if(!instructor){
            return res.json({success:false, message:"User not exists"})
        }
        const passCheck = bcrypt.compareSync(req.body.password, instructor.password);
        if(!passCheck){
            return res.json({success:false, message:"Incorrect password"})
        }
        return res.json({success:true, message:"Login successfully", instructor})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}

const getAllInstructor = async(req,res)=>{
    try{
        const instructors = await Instructor.find({type:"Instructor"})
        return res.json({success:true,message:"Instructor Fetched Successfully", instructors})
    }catch(err){
        return res.json({success:false,message:err.message})
    }
}
module.exports = {createInstructor,getAllInstructor,instructorLogin}