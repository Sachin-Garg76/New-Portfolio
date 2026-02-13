import React from 'react'
import '../styles/skills.css'
const Skills = () => {
   function toggleBox()
    {
      document.getElementById("box").classList.toggle("active"); 
    }
   function toggleBox2()
    {
      document.getElementById("box2").classList.toggle("active"); 
    }
  return (
    <>
      <div className="Main-div-skills ">
        <div id="box" className="box mt-5 mb-5">
          Skills
          <div className="skills-container">
            <div className="entities">JavaScript</div>
            <div className="entities">MongoDb</div>
            <div className="entities">Express.Js</div>
            <div className="entities">React.Js</div>
            <div className="entities">Node.Js</div>
            <div className="entities">Html5</div>
            <div className="entities">Css</div>
            <div className="entities">Bootstrap & Tailwind</div>
          </div>
        <button onClick={()=>{toggleBox()}}>Click me</button>
      </div>
      <div id="box2" className="box mt-5 mb-5">
        Tools
          <div className="skills-container">
            <div className="entities">Vs code</div>
            <div className="entities">Postman</div>
            <div className="entities">Image kit</div>
            <div className="entities">Git</div>
            <div className="entities">Github</div>
            <div className="entities">Docker</div>
          </div>
        <button onClick={()=>{toggleBox2()}}>Click me</button>
      </div>
      </div>
      
    </>
  )
}

export default Skills
