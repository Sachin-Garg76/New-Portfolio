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
        <div className="Inner-Education-Container row w-100 mt-5">
                <div className="col-sm-6 border text-center ">
                   <h5>Techpile pvt Ltd..</h5>
                   <h5>ICT with infosys</h5>
                  
                </div>
                <div className="col-sm-6 border text-center">
                  <h5> MERN </h5>
                  <h5>Pyhton with web dev</h5>
                  
                </div>
              </div>
      </div>
    </>
  )
}

export default Experience
