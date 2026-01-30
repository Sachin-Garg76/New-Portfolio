import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar.jsx"
const Experience = () => {
  return (
    <>
     <div className="Main-Experience-Container">
      <div className="Experience-Nav text-center">
        <Link to="/Education">Education</Link>
        <Link to="/Experience">Experience</Link>
      </div>
      <div className="Inner-Experience-Container">
        <div className="Entities">

        </div>
        <div className="Entities"></div>
        <div className="Entities"></div>
      </div>
     </div>
    </>
  )
}

export default Experience
