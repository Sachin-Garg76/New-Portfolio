import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar.jsx"
const Certificate = () => {
  return (
    <>
      <div className='Project-container'>
        <Navbar />
        <div className="Inner-container">
          <div className="Project-Card-Container">
            <img src="src/assets/Newsportal.png" alt="" className='project-card-img' />
            <div className='project-card-heading'>
              <h5 className='text-center'>Techpile Pvt Ltd</h5>
            </div>
            <p className='project-card-text'>
              iusto perferendis delectus illo illum ab laboriosam temporibus autem blanditiis repudiandae quam totam quisquam, officia, aperiam deleniti fugiat dolores quidem corrupti commodi dolorum doloribus animi ipsam. Vitae, autem vero......
            </p>
            <span className=''>Explore...</span>
            <Link className='project-card-button'>Click here</Link>
          </div>
          <div className="Project-Card-Container">
            <img src="src/assets/Newsportal.png" alt="" className='project-card-img' />
            <div className='project-card-heading'>
              <h5 className='text-center'>ICT with Infosys</h5>
            </div>
            <p className='project-card-text'>
              iusto perferendis delectus illo illum ab laboriosam temporibus autem blanditiis repudiandae quam totam quisquam, officia, aperiam deleniti fugiat dolores quidem corrupti commodi dolorum doloribus animi ipsam. Vitae, autem vero......
            </p>
            <span className=''>Explore...</span>
            <Link className='project-card-button'>Click here</Link>
          </div>
          <div className="Project-Card-Container">
            <img src="src/assets/Newsportal.png" alt="" className='project-card-img' />
            <div className='project-card-heading'>
              <h5 className='text-center'>News Portal </h5>
            </div>
            <p className='project-card-text'>
              iusto perferendis delectus illo illum ab laboriosam temporibus autem blanditiis repudiandae quam totam quisquam, officia, aperiam deleniti fugiat dolores quidem corrupti commodi dolorum doloribus animi ipsam. Vitae, autem vero......
            </p>
            <span className=''>Explore...</span>
            <Link className='project-card-button'>Click here</Link>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Certificate
