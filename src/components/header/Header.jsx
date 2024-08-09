import React from "react";
import translations from "../translations/translations";

const Header = ({ toggleLanguage, toggleDarkMode, language, darkMode }) => {
  const themeButtonText = darkMode
    ? translations[language].lightMode
    : translations[language].darkMode;

  const lenguageButtonText = language === "es" ? "English" : "Español";

  return (
    <header
      className={`flex justify-between items-center p-4 ${
        darkMode
          ? "bg-gray-800 text-white bg-opacity-30"
          : "bg-gray-300 bg-opacity-30 text-black"
      }`}
    >
      <div>
        <button
          onClick={toggleLanguage}
          className="bg-blue-500 bg-opacity-30 text-white px-4 py-2 rounded mr-4 inline-block"
        >
          {lenguageButtonText}
        </button>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-700 bg-opacity-30 text-white px-4 py-2 rounded mr-4 inline-block"
        >
          {themeButtonText}
        </button>
      </div>
      <div>
        <a
          href="#contact"
          className="bg-gray-900 bg-opacity-30 text-white px-4 py-2 mr-4 rounded inline-block"
        >
          {translations[language].contactMe}
        </a>
        <a
          href="#projects"
          className="bg-gray-900 bg-opacity-30 text-white px-4 py-2 rounded mr-4 inline-block"
        >
          {translations[language].projectsTitle}
        </a>
        <a
          href="#skills"
          className="bg-gray-900 bg-opacity-30 text-white px-4 py-2 rounded mr-4 inline-block"
        >
          {translations[language].skillsTitle}
        </a>
      </div>
    </header>
  );
};

export default Header;
