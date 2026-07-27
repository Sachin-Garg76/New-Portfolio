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
            <div className="HomeConent-container">
                <div className="Hero-Center">
                    <div className='typewriter typewriter-greet'>
                        <Typewriter
                            options={{
                                strings: [
                                    ` Hello, I'm`,
                                    ` Hello, I'm`,
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 80,
                                deleteSpeed: 100,
                            }}
                        />
                    </div>

                    <span className="text-color hero-name">
                        Sachin Garg
                    </span>

                    <div className="Intro">
                        <span className="text-color"> Creative </span>
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

                    <div className="Links-container">
                        <div className="Social-Links"><Link to="https://www.linkedin.com/in/sachin-garg-37aa74252/"><FaLinkedin /></Link></div>
                        <div className="Social-Links"><Link to="https://github.com/Sachin-Garg76"><FaGithub /></Link></div>
                        <div className="Social-Links"><Link to="https://leetcode.com/u/Sachin_323/"><SiLeetcode /></Link></div>
                        <div className="Social-Links" ><Link to="https://www.instagram.com/sachin.1806_"><BsInstagram /></Link></div>
                    </div>

                    <h4 className="resume-btn">
                        <Link className='link-tag' to="https://drive.google.com/file/d/192o4aaEjeqWKlkFors9TGTtMLfwD2vum/view?usp=drivesdk">RESUME <FaFileDownload /></Link>
                    </h4>
                </div>
            </div>

        </>
    )
}

export default HomeContent


/*

*/
