import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import translations from "../../components/translations/translations";
import ContactCard from "../../components/contact/ContactCard";
import Skill from "../../components/skill/Skill";
import Body from "../../components/body/Body";

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
    <div
      className={`${
        darkMode ? "text-white" : "text-black"
      } min-h-screen flex flex-col`}
    >
      <Header
        toggleLanguage={toggleLanguage}
        toggleDarkMode={toggleDarkMode}
        language={language}
        darkMode={darkMode}
      />
      <Body t={t} language={language} darkMode={darkMode} />
      <Skill t={t} darkMode={darkMode} />
      <ContactCard language={language} darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
