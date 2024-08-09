import React from "react";
import "./Header.css";
import translations from "../translations/translations";

const Header = ({ toggleLanguage, toggleDarkMode, language, darkMode }) => {
  const themeButtonText = darkMode
    ? translations[language].lightMode
    : translations[language].darkMode;

  const lenguageButtonText = language === "es" ? "English" : "Español";

  return (
    <header
      className={`header-container ${
        darkMode ? "header-container-dark" : "header-container-light"
      }`}
    >
      <div>
        <button onClick={toggleLanguage} className="header-button">
          {lenguageButtonText}
        </button>
        <button onClick={toggleDarkMode} className="header-button">
          {themeButtonText}
        </button>
      </div>
      <div>
        <a href="#contact" className="header-link">
          {translations[language].contactMe}
        </a>
        <a href="#projects" className="header-link">
          {translations[language].projectsTitle}
        </a>
        <a href="#skills" className="header-link">
          {translations[language].skillsTitle}
        </a>
      </div>
    </header>
  );
};

export default Header;
