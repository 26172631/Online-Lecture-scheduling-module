import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function IntructorLecture() {
    const location = useLocation()
    let id = location?.state?._id
    const [lectures, setLectures] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/lecture/instructorLecture/${id}`)
            .then(response => setLectures(response.data.lecture))
            .catch(error => console.error(error));
    }, [id]);
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div class="card p-0 mt-3">
          <div class="card-header">
            <h6 className="mb-0">My Lectures</h6>
          </div>
          <div class="card-body p-0 table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Level</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {lectures.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.courseId.name}</td>
                    <td>{item?.courseId.description}</td>
                    <td>{item?.courseId.level}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
