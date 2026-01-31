import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Education.css'
import Navbar from "./Navbar.jsx"
const Experience = () => {
  return (
    <>
      <div className="Main-Education-Container">
        <div className="Education-Nav text-center">
          <Link to="/Education" className='link-tag'>Education</Link>
          <Link to="/Experience" className='link-tag'>Experience</Link>
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
