import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Components/Login'
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AllInstructor from './Components/AllInstructor';
import Header from './Components/Header';
import Course from './Components/Course';
import Lecture from './Components/Lecture';
import IntructorLecture from './Components/IntructorLecture';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/allinstructor" element={<AllInstructor />} />
      <Route path="/course" element={<Course />} />
      <Route path="/lecture" element={<Lecture />} />
      <Route path="/instructorlecture" element={<IntructorLecture />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
