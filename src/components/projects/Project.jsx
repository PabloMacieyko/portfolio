import React from "react";
import "./Project.css";

const Project = ({ title, description, link, darkMode, buttonText }) => {
  return (
    <div
      className={`project-container ${
        darkMode ? "project-container-dark" : "project-container-light"
      }`}
    >
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a
        href={link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Project;