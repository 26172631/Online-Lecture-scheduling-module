import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
export default function Course() {
  const [show, setShow] = useState(false);
  const [courses, setCourses] = useState([]);
  const [courseData, setCourseData] = useState({
    name: "",
    level: "",
    description: "",
    image:""
  });
  const updateData = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };
  const submitData = () => {
    axios
      .post("http://13.201.57.93:4000/course/createcourse", courseData)
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          setShow(false);
          axios
          .get("http://13.201.57.93:4000/course/getallcourse")
          .then((res) => {
            if (res.data.success) {
              setCourses(res.data.courses);
            }
          });
          setCourseData({name:"",level:"",description:"",image:""})
        } else {
          alert(res.data.message);
        }
      });
  };
  useEffect(() => {
    axios
      .get("http://13.201.57.93:4000/course/getallcourse")
      .then((res) => {
        if (res.data.success) {
          setCourses(res.data.courses);
        }
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div class="card p-0 mt-3">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h6 className="mb-0">All Courses</h6>
              <button className="btn btn-success" onClick={() => setShow(true)}>
                Add Course
              </button>
            </div>
            <div class="card-body p-0 table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Sr.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Level</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.level}</td>
                      <td>{item.description}</td>
                      <td><img src={item.image} alt="" style={{height:"30px",width:"30px"}} /></td>
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
            <h5 className="text-center">Create Course</h5>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter  Name..."
              className="input-box"
              value={courseData.name}
              onChange={updateData}
            />
            <label for="level">Level</label>
            <input
              type="text"
              id="level"
              name="level"
              placeholder="Enter Level..."
              className="input-box"
              value={courseData.level}
              onChange={updateData}
            />
            <label for="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter Description..."
              className="input-box"
              value={courseData.description}
              onChange={updateData}
            />
            <label for="image">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Enter Image URL..."
              className="input-box"
              value={courseData.image}
              onChange={updateData}
            />
            <button className="btn-submit" onClick={submitData}>
              Create
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
