import React from "react";
import "../styles/Certificate.css";
import newsportal from "../assets/Newsportal.png";

const certificates = [
  {
    id: 1,
    title: "Trainig Certificate at Coincent",
    image: "public/Training.png",
  },
  {
    id: 2,
    title: "MERN STACK at Techpile",
    image: "public/Techpile.png",
  },
  {
    id: 3,
    title: "Pyhton with Ai at coincent",
    image: "public/Coincent.png",
  },
  {
    id: 4,
    title: "Pyhton with Web development at Infosys",
    image: "public/infosys.jpg",
  },
];

const Certificate = () => {
  return (
    <div className="certificate-wrapper">
      <h2 className="certificate-heading">Certificates</h2>

      <div className="certificate-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="image-container">
              <img src={cert.image} alt={cert.title} />
            </div>
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
