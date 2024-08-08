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
          className="bg-blue-500 bg-opacity-30 text-white px-4 py-2 rounded mr-4"
        >
          {lenguageButtonText}
        </button>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-700 bg-opacity-30 text-white px-4 py-2 rounded mr-4"
        >
          {themeButtonText}
        </button>
      </div>
      <div>
        <a
          href="#contact"
          className="bg-green-900 bg-opacity-30 text-white px-4 py-2 rounded inline-block"
        >
          {translations[language].contactMe}
        </a>
      </div>
    </header>
  );
};

export default Header;
