import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Homecontent.css'
import Typewriter from 'typewriter-effect'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import '../App.css'

const HomeContent = () => {
    return (
        <>
            <div className="HomeConent-container">
                <div className="Hero-Grid">

                    {/* Left column: text content */}
                    <div className="Hero-Left">
                        <div className='typewriter typewriter-greet'>
                            <Typewriter
                                options={{
                                    strings: [` Hello, I'm`, ` Hello, I'm`],
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
                                        strings: [` Developer `, ` Designer`],
                                        autoStart: true,
                                        loop: true,
                                        delay: 80,
                                        deleteSpeed: 100,
                                    }}
                                />
                            </div>
                        </div>

                        <p className="Hero-Tagline">
                            Building full-stack web experiences with the MERN stack —
                            clean code, thoughtful design, real-world problem solving.
                        </p>

                        <div className="Hero-Actions">
                            <h4 className="resume-btn">
                                <Link className='link-tag' to="https://drive.google.com/file/d/192o4aaEjeqWKlkFors9TGTtMLfwD2vum/view?usp=drivesdk">
                                    RESUME <FaFileDownload />
                                </Link>
                            </h4>
                            <Link  to="/Projects" className="secondary-btn">
                                View Projects
                            </Link>
                        </div>

                        <div className="Links-container">
                            <div className="Social-Links"><Link to="https://www.linkedin.com/in/sachin-garg-37aa74252/"><FaLinkedin /></Link></div>
                            <div className="Social-Links"><Link to="https://github.com/Sachin-Garg76"><FaGithub /></Link></div>
                            <div className="Social-Links"><Link to="https://leetcode.com/u/Sachin_323/"><SiLeetcode /></Link></div>
                            <div className="Social-Links"><Link to="https://www.instagram.com/sachin.1806_"><BsInstagram /></Link></div>
                        </div>
                    </div>

                    {/* Right column: code-style visual */}
                    <div className="Hero-Right">
                        <div className="code-card">
                            <div className="code-card-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                                <span className="code-card-title">developer.js</span>
                            </div>
                            <div className="code-card-body">
                                <p><span className="code-key">const</span> <span className="code-var">developer</span> = {"{"}</p>
                                <p className="code-indent"><span className="code-prop">name</span>: <span className="code-string">'Sachin Garg'</span>,</p>
                                <p className="code-indent"><span className="code-prop">role</span>: <span className="code-string">'MERN Stack Developer'</span>,</p>
                                <p className="code-indent"><span className="code-prop">stack</span>: [<span className="code-string">'React'</span>, <span className="code-string">'Node'</span>, <span className="code-string">'Express'</span>, <span className="code-string">'MongoDB'</span>],</p>
                                <p className="code-indent"><span className="code-prop">solving</span>: <span className="code-key">true</span>,</p>
                                <p>{"}"}</p>
                            </div>
                        </div>

                        <div className="floating-badge badge-1">⚛️ React</div>
                        <div className="floating-badge badge-2">🟢 Node.js</div>
                        <div className="floating-badge badge-3">🍃 MongoDB</div>
                    </div>
                </div>

                <a href="#projects" className="scroll-indicator" aria-label="Scroll to projects">
                    <FaArrowDown />
                </a>
            </div>
        </>
    )
}
export default HomeContent
