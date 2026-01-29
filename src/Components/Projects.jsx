import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
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
          <div className="Project-Card">Card 1</div>
          <div className="Project-Card">Card 2</div>
          <div className="Project-Card">Card 3</div>
          <div className="Project-Card">Card 4</div>
          <div className="Project-Card">Card 5</div>
          <div className="Project-Card">Card 6</div>
        </div>
      </div>

      <button onClick={handleNext}>➡</button>
    </div>
  );
};

export default Projects;
