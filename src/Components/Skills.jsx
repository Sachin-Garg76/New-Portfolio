import React, { useState } from "react";
import "../styles/skills.css";

const Skills = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <h2 className="Heading-top">My <span className="text-color">Skills</span> & <span className="text-color">Tools</span></h2>
      <div className="skills-wrapper">
        {/* Skills Card */}
        <div className="card">
          <div className="card-header">
            <h2>Skills</h2>
            <button
              className="toggle-btn"
              onClick={() => toggleSection("skills")}
            >
              {openSection === "skills" ? "Hide" : "View Skills"}
            </button>
          </div>

          <div
            className={`content ${openSection === "skills" ? "show" : ""
              }`}
          >
            {[
              "JavaScript",
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "HTML5",
              "CSS3",
              "Bootstrap",
              "Tailwind",
            ].map((skill, index) => (
              <span key={index} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Card */}
        <div className="card">
          <div className="card-header">
            <h2>Tools</h2>
            <button
              className="toggle-btn"
              onClick={() => toggleSection("tools")}
            >
              {openSection === "tools" ? "Hide" : "View Tools"}
            </button>
          </div>

          <div
            className={`content ${openSection === "tools" ? "show" : ""
              }`}
          >
            {[
              "VS Code",
              "Postman",
              "ImageKit",
              "Git",
              "GitHub",
              "Docker",
            ].map((tool, index) => (
              <span key={index} className="tag">
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Skills;
