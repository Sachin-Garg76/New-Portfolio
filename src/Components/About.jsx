import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "./Navbar.jsx"
import '../styles/About.css'
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="About-Container row">
        <div className="col-sm-6 About-Inner">
          <img src="src/assets/Main.jpeg" alt="" className='About-Image'/>
        </div>
        <div className="col-sm-6 About-Inner">
          <h2 className='About-heading'>
            <span className="text-color">Creativity</span> <br /> Is My Passion
          </h2>
          <p className="About-para">
            I'm a web <span className="text-color">developer & designer</span> <br />
            passionate about experimenting with <br /> new <span className="text-color">skills and creativity.</span>Driven by <br /> learning
            and curisoity, I'm always looking <br /> to explore and learn new development <br /> and design skills.
          </p>
         <Link className='resume-button mt-0'>
                                     <Link className='link-tag' to="https://drive.google.com/file/d/1qjRVjdfSuTX_BNNSJEdr-YLnxmmuuuY2/view?usp=drivesdk">RESUME <FaFileDownload /></Link></Link>
        </div>
      </div>
    </>
  )
}

export default About
