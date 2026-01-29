import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";

const Projects = () => {
  const Project_Card_Data = [{
      img: "src/assets/Newsportal.png",
      Title: "Project Title",
     Tech_Stack: "MERN",
      Desc: "Here will be the project desc little.....Here will be the project desc little.....",
      Link :"Url"
    },{
      img: "src/assets/Newsportal.png",
      Title: "Project Title",
     Tech_Stack: "MERN",
      Desc: "Here will be the project desc little.....Here will be the project desc little.....",
      Link :"Url"
    },{
      img: "src/assets/Newsportal.png",
      Title: "Project Title",
     Tech_Stack: "MERN",
      Desc: "Here will be the project desc little.....Here will be the project desc little.....",
      Link :"Url"
    },{
      img: "src/assets/Newsportal.png",
      Title: "Project Title",
     Tech_Stack: "MERN",
      Desc: "Here will be the project desc little.....Here will be the project desc little.....",
      Link :"Url"
    },
    {
      img: "src/assets/Newsportal.png",
      Title: "Project Title",
     Tech_Stack: "MERN",
      Desc: "Here will be the project desc little.....Here will be the project desc little.....",
      Link: "Url"
    },
    {
      img: "src/assets/Newsportal.png",
      Title: "Project Title",
     Tech_Stack: "MERN",
      Desc: "Here will be the project desc little.....Here will be the project desc little.....",
      Link :"Url"
    }]
  const [index, setIndex] = useState(0);

  const totalCards = 6;
  const visibleCards = 3;

  const handleNext = () => {
    if (index < totalCards - visibleCards) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="Project-container">
      <button onClick={handlePrev}>⬅</button>

      <div className="viewport">
        <div
          className="Inner-Container"
          style={{ transform: `translateX(-${index * 35}%)` }}
        >
          {
            Project_Card_Data.map((project)=>{
                return (
                  <div className="Project-Card">
                  <img src={project.img} className="Project-Card-img" />
                 <div className="d-flex Project-Card-title">
                   <span >{project.Title}</span>
                  <span>{project.Tech_Stack}</span>
                 </div>
                  <p className="Project-Card-desc">{project.Desc}</p>
                  <Link to={project.Link} className="Project-Card-Button">View Code</Link>
                </div>
                )
            })
          }
        </div>
      </div>

      <button onClick={handleNext}>➡</button>
    </div>
  );
};

export default Projects;
