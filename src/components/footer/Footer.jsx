import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = ({ darkMode }) => {
  return (
    <footer
      id="contact"
      className={`footer-container ${
        darkMode ? "footer-container-dark" : "footer-container-light"
      }`}
    >
      <a
        href="https://www.instagram.com/pablo.macieyko/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" className="footer-icon" />
      </a>
      <a
        href="https://wa.me/3476596041"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" className="footer-icon" />
      </a>
      <a
        href="mailto:macieyko.pablo@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" className="footer-icon" />
      </a>
      <a
        href="https://github.com/PabloMacieyko"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" className="footer-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/pablo-macieyko/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="footer-icon" />
      </a>
    </footer>
  );
};

export default Footer;
