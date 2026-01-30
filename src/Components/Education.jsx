import React from 'react'
import '../styles/Education.css'
import { Link } from 'react-router-dom'
const Education = () => {
  return (
    <>
     <div className="Main-Education-Container">
      <div className="Education-Nav text-center">
        <Link to="/Education" className='link-tag'>Education</Link>
        <Link to="/Experience" className='link-tag'>Experience</Link>
      </div>
      <div className="Inner-Education-Container">
        <div className="Entities">
          
        </div>
        <div className="Entities"></div>
        <div className="Entities"></div>
      </div>
     </div>
    </>
  )
}

export default Education
