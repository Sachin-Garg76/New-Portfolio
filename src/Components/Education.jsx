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
      <div className="Inner-Education-Container row w-100 mt-5">
        <div className="col-sm-6 border text-center ">
           <h5>Sanskriti University</h5>
           <h5>Pt.HSRL indian Public school</h5>
           <h5> Brij Dham Vidya Mandir</h5>
          
         
        </div>
        <div className="col-sm-6 border text-center">
          <h5> C.S.E |2022-2026 </h5>
          <h5>P.C.M | 2021-2022</h5>
          <h5>2019-2020</h5>
          
          
          
        </div>
      </div>
     </div>
    </>
  )
}

export default Education
