import React, { useState } from "react";
import Project from "../../components/projects/Project";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [language, setLanguage] = useState("es");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      title: {
        es: "TridenteGym",
        en: "TridenteGym",
      },
      description: {
        es: "Aplicación de gimnasio que tiene CRUD de actividades y usuarios. Hay 3 tipos de roles: dueño: tridentegym@tridentegym.com Contraseña: trident - Profesor: profe@profe.com contraseña: profe - Cliente: user@user.com contraseña: user",
        en: "Gym app that has CRUD of activities and users. There are 3 types of roles: owner: tridentegym@tridentegym.com Pass: trident - Professor: profe@profe.com pass: profe - Client: user@user.com pass: user",
      },
      link: "https://tridente-gym-web.vercel.app/",
    },
  ];

  const aboutMeText = {
    es: "Soy Pablo, un apasionado programador en constante crecimiento. Con 30 años, estoy decidido a explorar y aprender en el vasto mundo del desarrollo de software. Mi enfoque va más allá del código: me encanta colaborar en equipo y enfrentar desafíos que me hagan evolucionar como profesional. Soy un firme creyente en la importancia del trabajo en equipo y el intercambio de conocimientos. Busco oportunidades para crecer y contribuir en proyectos emocionantes. Mi entusiasmo y dedicación son mis mejores herramientas. ¡Saludos!",
    en: "I'm Pablo, a passionate programmer on a constant growth journey. At 30 years old, I'm determined to explore and learn in the vast world of software development. My focus goes beyond code: I love collaborating in teams and tackling challenges that help me evolve as a professional. I'm a firm believer in the importance of teamwork and knowledge sharing. I'm seeking opportunities to grow and contribute to exciting projects. My enthusiasm and dedication are my best tools. Greetings!",
  };

  const aboutMeTitle = {
    es: "Sobre Mi",
    en: "About Me",
  };

  const titlePortfolio = {
    es: "Bienvenido a Mi Portafolio",
    en: "Welcome to My Portfolio",
  };

  const textPortfolio = {
    es: "Te presento mis proyectos y habilidades!",
    en: "Here you'll find my projects and skills!",
  };

  const viewProjectText = {
    es: "Ver Proyecto",
    en: "View Project",
  };

  const themeButtonText = {
    es: darkMode ? "Modo Claro" : "Modo Oscuro",
    en: darkMode ? "Light Mode" : "Dark Mode",
  };

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
        themeButtonText={themeButtonText[language]}
      />
      <main
        className="p-8 min-h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('path_to_your_image.jpg')" }}
      >
        <div
          className={`${
            darkMode ? "bg-gray-800 bg-opacity-90" : "bg-gray-100 bg-opacity-80"
          } p-6 rounded-lg min-h-screen`}
        >
          <h2 className="text-4xl font-bold mb-6">
            {titlePortfolio[language]}
          </h2>
          <p className="text-lg mb-4">{textPortfolio[language]}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title[language]}
                description={project.description[language]}
                link={project.link}
                darkMode={darkMode}
                buttonText={viewProjectText[language]}
              />
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              {aboutMeTitle[language]}
            </h3>
            <p>{aboutMeText[language]}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
