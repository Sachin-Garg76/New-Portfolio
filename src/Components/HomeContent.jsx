import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Homecontent.css'
import Typewriter from 'typewriter-effect'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";


import '../App.css'
const HomeContent = () => {
    return (
        <>
            <div className="HomeConent-container row">
                <div className="Inner-Home-Container col-sm-4">
                    <div className="Left-Inner Greeting">
                            <div className='typewriter typewriter-greet'>
                                <Typewriter
                                    options={{
                                        strings: [
                                            ` Hello I'm`,
                                            ` Hello I'm`,
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 80,
                                        deleteSpeed: 100,
                                    }}
                                />
                            </div>

                         <br />
                        <span className="text-color typewriter-greet">
                            Sachin
                        </span>

                    </div>
                    <div className="Left-Inner">
                        <div className="Links-container">
                            <div className="Social-Links"><Link to="https://www.linkedin.com/in/sachin-garg-37aa74252/"><FaLinkedin /></Link></div>
                            <div className="Social-Links"><Link to="https://github.com/Sachin-Garg76"><FaGithub /></Link></div>
                            <div className="Social-Links"><Link to="https://leetcode.com/u/Sachin_323/"><SiLeetcode /></Link></div>
                            <div className="Social-Links" ><Link to="https://www.instagram.com/sachin.1806_"><BsInstagram /></Link></div>
                        </div>
                    </div>
                </div>
                <div className="Inner-Home-Container col-sm-4">
                    <div className="Main-Img-Container">
                        <img src="src/assets/Main.jpeg" alt="" className='Img-Main' />
                    </div>
                </div>
                <div className="Inner-Home-Container col-sm-4">

                    <div className="Right-Inner Intro">
                        <span className="text-color"> Creative <br />  </span>
                        <div className='typewriter'>
                            <Typewriter
                                options={{
                                    strings: [
                                        ` Developer `,
                                        ` Designer`,
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 80,
                                    deleteSpeed: 100,
                                }}
                            />
                        </div>
                    </div>
                    <div className="Right-Inner">
                        <h4 className="resume-btn">
                            RESUME <FaFileDownload />
                        </h4>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HomeContent


/*

*/