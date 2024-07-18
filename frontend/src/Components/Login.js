import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [userData,setUserData]= useState({
        email:"",
        password:"",
      })
      const navigate = useNavigate()
      const updateData = (e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
      }
      const submitData=()=>{
        axios.post("http://localhost:4000/instructor/instructorLogin",userData).then((res)=>{
          if(res.data.success){
            alert(res.data.message)
            if(userData.email === "admin@gmail.com"){
              navigate("/allinstructor")
            }else{
              navigate("/instructorlecture" ,{state:res.data.instructor})
            }
          }else{
            alert(res.data.message)
          }
        })
      }
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center vh-100">
        <div className="col-lg-6 col-md-10 col-sm-11 col-11 border rounded py-3">
            <h5 className="text-center">Login Yourself!</h5>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email..."
            className="input-box"
            value={userData.email}
            onChange={updateData}
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password..."
            className="input-box"
            value={userData.password}
            onChange={updateData}
          />
          <button className="btn-submit" onClick={submitData}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
