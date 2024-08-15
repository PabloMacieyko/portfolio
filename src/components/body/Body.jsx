import React from "react";
import Project from "../../components/projects/Project";
import projects from "../../components/projects/ProjectData";
import "./Body.css";

const Body = ({ t, language, darkMode }) => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-cover bg-center text-center">
        <div
          className={`body-container ${
            darkMode ? "body-container-dark" : "body-container-light"
          }`}
        >
          <h1 className="body-title">{t.titlePortfolio}</h1>
          <p className="body-text">{t.textPortfolio}</p>

          <div className="body-section">
            <h2 className="body-section-title">{t.aboutMeTitle}</h2>
            <p>{t.aboutMeText}</p>
          </div>

          <div className="body-section">
            <h2 id="projects" className="body-section-title">
              {t.projectsTitle}
            </h2>

            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title[language]}
                description={project.description[language]}
                link={project.link}
                darkMode={darkMode}
                buttonText={t.viewProjectText}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Body;
