import React from 'react'
import Image from '../star.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function Navbar() {
  return (
    <div className='container'>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Image} alt="Bootstrap" width="150" height="100"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Free 11+ Courses
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item nav-link" to="/english">English Practise Papers</Link></li>
                  <li><Link class="dropdown-item nav-link" to="/maths">Maths Practise Papers</Link></li>
                  <li><Link class="dropdown-item nav-link" to="/verbal">Verbal Reasoning Papers</Link></li>
                  <li><Link class="dropdown-item nav-link" to="/nonverbal">Non-verbal Reasoning Papers</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/timer">Timer</Link>
              </li>
              
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
);
}
