import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiDotnet,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFirebase,
} from "react-icons/si";
import "./Skill.css"; // Importa el archivo CSS

const Skill = ({ t, darkMode }) => {
  return (
    <div
      id="skills"
      className={`skill-container ${
        darkMode ? "skill-container-dark" : "skill-container-light"
      }`}
    >
      <h2 className="skill-title">{t.skillsTitle}</h2>

      {/* Frontend Skills */}
      <div className="skill-section">
        <h3 className="skill-subtitle">Frontend</h3>
        <div className="skill-grid skill-grid-cols-frontend skill-grid-cols-frontend-sm skill-grid-cols-frontend-md">
          <div className="skill-icon-container">
            <FaReact size={50} className="skill-icon hover:text-blue-400" />
            <p className="skill-text">React</p>
          </div>
          <div className="skill-icon-container">
            <SiJavascript
              size={50}
              className="skill-icon hover:text-yellow-300"
            />
            <p className="skill-text">JavaScript</p>
          </div>
          <div className="skill-icon-container">
            <SiBootstrap size={50} className="skill-icon hover:text-purple-500" />
            <p className="skill-text">Bootstrap</p>
          </div>
          <div className="skill-icon-container">
            <SiHtml5 size={50} className="skill-icon hover:text-orange-500" />
            <p className="skill-text">HTML</p>
          </div>
          <div className="skill-icon-container">
            <SiCss3 size={50} className="skill-icon hover:text-blue-500" />
            <p className="skill-text">CSS</p>
          </div>
          <div className="skill-icon-container">
            <SiTailwindcss
              size={50}
              className="skill-icon hover:text-sky-500"
            />
            <p className="skill-text">Tailwind</p>
          </div>
        </div>
      </div>

      {/* Backend Skills */}
      <div className="skill-section">
        <h3 className="skill-subtitle">Backend</h3>
        <div className="skill-grid skill-grid-cols-backend skill-grid-cols-backend-sm">
          <div className="skill-icon-container">
            <SiDotnet size={50} className="skill-icon hover:text-purple-500" />
            <p className="skill-text">.NET</p>
          </div>
          <div className="skill-icon-container">
            <SiMongodb size={50} className="skill-icon hover:text-green-500" />
            <p className="skill-text">MongoDB</p>
          </div>
          <div className="skill-icon-container">
            <SiFirebase
              size={50}
              className="skill-icon hover:text-yellow-500"
            />
            <p className="skill-text">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
