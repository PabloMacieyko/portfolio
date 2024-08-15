import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import translations from "../../components/translations/translations";
import ContactCard from "../../components/contact/ContactCard";
import Skill from "../../components/skill/Skill";
import Body from "../../components/body/Body";
import background2 from "../../../public/background2.mp4";
import backgroundIMG from "../../../public/backgroundIMG.jpg";
import "./Home.css";

const Home = () => {
  const [language, setLanguage] = useState("es");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const t = translations[language];

  return (
    <div className="home-container">
      <picture>
        <source src={background2} type="video/mp4" />
        <img
          src={backgroundIMG}
          alt="Background"
          className="background-image"
        />
      </picture>
      <video
        autoPlay
        loop
        muted
        className="background-video"
      >
        <source src={background2} type="video/mp4" />
        Tu navegador no admite videos HTML5.
      </video>
      <div className={`content ${darkMode ? "text-white" : "text-black"}`}>
        <Header
          toggleLanguage={toggleLanguage}
          toggleDarkMode={toggleDarkMode}
          language={language}
          darkMode={darkMode}
        />
        <div className="main-content">
          <Body t={t} language={language} darkMode={darkMode} />
          <Skill t={t} darkMode={darkMode} />
          <ContactCard language={language} darkMode={darkMode} />
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Home;
