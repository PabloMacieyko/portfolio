import React from "react";
import Project from "../../components/projects/Project";
import projects from "../../components/projects/ProjectData";
import "./Body.css";
import portfolio from "/portfolio.jpg";

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

          <div className="body-section flex flex-col lg:flex-row justify-between items-center mt-10">
            <div className="lg:w-1/2 text-left lg:mr-8">
              <h2 className="body-section-title">{t.aboutMeTitle}</h2>
              <p>{t.aboutMeText}</p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
              <img
                src={portfolio}
                alt="Pablo Ivan Macieyko"
                className="rounded-full max-w-full h-auto lg:w-60 lg:h-60 border-4 border-black object-cover"
              />
            </div>
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
