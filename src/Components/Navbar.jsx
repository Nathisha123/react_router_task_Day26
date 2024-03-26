import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg ">
     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link to ='/all'className="nav-link" >All</Link>
      </li>
      <li className="nav-item">
        <Link to='/fullstack' className="nav-link" >Full Stack Development</Link>
      </li>
      <li className="nav-item">
        <Link to='/datascience' className="nav-link" >Data Science</Link>
      </li>
      <li className="nav-item">
        <Link to='/cybersecurity' className="nav-link" >Cyber Security</Link>
      </li>
      <li className="nav-item">
        <Link to='/career' className="nav-link" >Career</Link>
      </li>
      </ul>
      </div>
  </nav>
  </>
}

export default Navbar