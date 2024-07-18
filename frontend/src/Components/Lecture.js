import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
export default function Lecture() {
  const [show, setShow] = useState(false);
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState({ courseId: '', instructorId: '', date: '' });
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const updateData = (e) => {
    setLecture({ ...lecture, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios.get('http://13.201.57.93:4000/course/getallcourse')
        .then(response => setCourses(response.data.courses))
        .catch(error => console.error(error));
    axios.get('http://13.201.57.93:4000/instructor/getallInstructor')
        .then(response => setInstructors(response.data.instructors))
        .catch(error => console.error(error));
}, []);
  const submitData = () => {
    axios
      .post("http://13.201.57.93:4000/lecture/assigncourse", lecture)
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          setShow(false);
          axios
          .get("http://13.201.57.93:4000/lecture/getAlllecture")
          .then((res) => {
            if (res.data.success) {
                setLectures(res.data.lecture);
            }
          });
          setLecture({courseId:"",instructorId:"",date:""})
        } else {
          alert(res.data.message);
        }
      });
  };
  useEffect(() => {
    axios
      .get("http://13.201.57.93:4000/lecture/getAlllecture")
      .then((res) => {
        if (res.data.success) {
            setLectures(res.data.lecture);
        }
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div class="card p-0 mt-3">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h6 className="mb-0">All Lecture</h6>
              <button className="btn btn-success" onClick={() => setShow(true)}>
                Assign Lecture
              </button>
            </div>
            <div class="card-body p-0 table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Sr.</th>
                    <th scope="col">Instructor Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Lecture</th>
                  </tr>
                </thead>
                <tbody>
                  {lectures.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item?.instructorId.name}</td>
                      <td>{item?.instructorId.email}</td>
                      <td>{item?.courseId.name}</td>
                      <td>{item?.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        size="lg"
        centered={true}
        onHide={() => setShow(false)}
        closeButton
        backdrop="static"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body closeButton>
          <div>
            <h5 className="text-center">Assign Lecture</h5>
            <select name="courseId" className="input-box" value={lecture.courseId} onChange={updateData}>
                <option value="">Select Course</option>
                {courses.map(course => (
                    <option key={course._id} value={course._id}>{course.name}</option>
                ))}
            </select>
            <select name="instructorId" className="input-box" value={lecture.instructorId} onChange={updateData}>
                <option value="">Select Instructor</option>
                {instructors.map(instructor => (
                    <option key={instructor._id} value={instructor._id}>{instructor.name}</option>
                ))}
            </select>
            <label for="name">Name</label>
            <input type="date" name="date" className="input-box" value={lecture.date} onChange={updateData} />
            
            <button className="btn-submit" onClick={submitData}>
              Assign
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
