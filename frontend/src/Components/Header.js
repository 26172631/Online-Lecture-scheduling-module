import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  let show = location.pathname === "/allinstructor" || location.pathname === "/course" || location.pathname === "/lecture"
  return (
    <>
    {
      show ? <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container">
        <a class="navbar-brand text-white" href="/allinstructor">Hermanus</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-white" aria-current="page" href="/allinstructor">Instructor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/course">Course</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/lecture">Lecture</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> : ""
    }
    </>
  )
}
