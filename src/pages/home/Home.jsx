import React, { useState } from "react";
import Project from "../../components/projects/Project";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import translations from "../../components/translations/translations";
import ContactCard from "../../components/contact/ContactCard";
import projects from "../../components/projects/ProjectData";


const Home = () => {
  const [language, setLanguage] = useState("es");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const t = translations[language];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen flex flex-col`}
    >
      <Header
        toggleLanguage={toggleLanguage}
        toggleDarkMode={toggleDarkMode}
        language={language}
        darkMode={darkMode}
        themeButtonText={t.themeButtonText}
      />
      <main
        className="p-8 min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: "url('/public/background.jpg')" }}
      >
        <div
          className={`${
            darkMode ? "bg-gray-800 bg-opacity-90" : "bg-gray-100 bg-opacity-80"
          } p-8 rounded-lg w-full max-w-4xl`}
        >
          <h1 className="text-4xl font-bold mb-4">{t.titlePortfolio}</h1>
          <p className="mb-8">{t.textPortfolio}</p>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">{t.aboutMeTitle}</h2>
            <p>{t.aboutMeText}</p>
          </div>

          <div className="mb-8 w-full">
            <h2 className="text-3xl font-bold mb-4">{t.projectsTitle}</h2>
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

          <ContactCard language={language} darkMode={darkMode} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
