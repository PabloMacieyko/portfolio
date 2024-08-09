import React from "react";
import Project from "../../components/projects/Project";
import projects from "../../components/projects/ProjectData";

const Body = ({ t, language, darkMode }) => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-cover bg-center text-center">
        <div
          className={`${
            darkMode ? "bg-gray-800 bg-opacity-30" : "bg-gray-100 bg-opacity-30"
          } p-8 rounded-lg w-full max-w-4xl`}
        >
          <h1 className="text-4xl font-bold mb-4 ">{t.titlePortfolio}</h1>
          <p className="mb-8">{t.textPortfolio}</p>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">{t.aboutMeTitle}</h2>
            <p>{t.aboutMeText}</p>
          </div>

          <div className="mb-8 w-full">
            <h2 id="projects" className="text-3xl font-bold mb-4">{t.projectsTitle}</h2>

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
