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
      <div className={`${darkMode ? "text-white" : "text-black"} z-10 relative`}>
        <Header
          toggleLanguage={toggleLanguage}
          toggleDarkMode={toggleDarkMode}
          language={language}
          darkMode={darkMode}
        />
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <Body t={t} language={language} darkMode={darkMode} />
          <Skill t={t} darkMode={darkMode} />
          <ContactCard language={language} darkMode={darkMode} />
        </div>

        <Footer darkMode={darkMode} />
      </div>
  );
};

export default Home;
