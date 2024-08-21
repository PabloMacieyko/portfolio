import React, { useState } from "react";
import "./Header.css";
import translations from "../translations/translations";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ toggleLanguage, toggleDarkMode, language, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const themeButtonText = darkMode
    ? translations[language].lightMode
    : translations[language].darkMode;

  const languageButtonText = language === "es" ? "English" : "Español";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`header-container ${
        darkMode ? "header-container-dark" : "header-container-light"
      } p-4 flex justify-between items-center`}
    >
      {/* Logo y botones de idioma y tema */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleLanguage} className="header-button">
          {languageButtonText}
        </button>
        <button onClick={toggleDarkMode} className="header-button">
          {themeButtonText}
        </button>
      </div>

      {/* Menú hamburguesa en pantallas pequeñas */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="header-button">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Links de navegación en pantallas medianas y grandes */}
      <nav
        className={`${
          menuOpen ? "flex nav-opened" : "hidden"
        } flex-col md:flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto ${
          darkMode ? "header-container-dark" : "header-container-light"
        } md:bg-transparent md:translate-x-0 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:transform-none z-40`}
      >
        <a href="#contact" className="header-link">
          {translations[language].contactMe}
        </a>
        <a href="#projects" className="header-link">
          {translations[language].projectsTitle}
        </a>
        <a href="#skills" className="header-link">
          {translations[language].skillsTitle}
        </a>
      </nav>
    </header>
  );
};

export default Header;
