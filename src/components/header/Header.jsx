import React from "react";
import translations from "../translations/translations";

const Header = ({ toggleLanguage, toggleDarkMode, language, darkMode }) => {
  const themeButtonText = darkMode
    ? translations[language].lightMode
    : translations[language].darkMode;

  return (
    <header
      className={`flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-800 text-white bg-opacity-80" : "bg-gray-300 bg-opacity-80 text-black"
      }`}
    >
      <div>
        <button onClick={toggleLanguage} className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
          {language === "es" ? "Switch to English" : "Cambiar a Español"}
        </button>
        <button onClick={toggleDarkMode} className="bg-gray-700 text-white px-4 py-2 rounded">
          {themeButtonText}
        </button>
      </div>
    </header>
  );
};

export default Header;