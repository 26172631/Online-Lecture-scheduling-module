import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
export default function AllInstructor() {
  const [show, setShow] = useState(false);
  const [instructor, setInstructor] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const updateData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitData = () => {
    axios
      .post("http://13.201.57.93:4000/instructor/createinstructor", userData)
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          setShow(false);
          axios
          .get("http://13.201.57.93:4000/instructor/getallInstructor")
          .then((res) => {
            if (res.data.success) {
              setInstructor(res.data.instructors);
            }
          });
          setUserData({name:"",email:"",password:""})
        } else {
          alert(res.data.message);
        }
      });
  };
  useEffect(() => {
    axios
      .get("http://13.201.57.93:4000/instructor/getallInstructor")
      .then((res) => {
        if (res.data.success) {
          setInstructor(res.data.instructors);
        }
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div class="card p-0 mt-3">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h6 className="mb-0">All Intructor</h6>
              <button className="btn btn-success" onClick={() => setShow(true)}>
                Add Instructor
              </button>
            </div>
            <div class="card-body p-0 table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Sr.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {instructor.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
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
            <h5 className="text-center">Create Instructor</h5>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Instructor Name..."
              className="input-box"
              value={userData.name}
              onChange={updateData}
            />
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Intructor email..."
              className="input-box"
              value={userData.email}
              onChange={updateData}
            />
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Instructor password..."
              className="input-box"
              value={userData.password}
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
