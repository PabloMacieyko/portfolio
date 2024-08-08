import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`items-center p-4 mt-8 ${
        darkMode
          ? "bg-gray-800 text-white bg-opacity-80"
          : "bg-gray-300 bg-opacity-80 text-black"
      }`}
    >
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.instagram.com/pablo.macieyko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl hover:text-gray-400"
          />
        </a>
        <a
          href="https://wa.me/3476596041"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-2xl hover:text-gray-400"
          />
        </a>
        <a
          href="mailto:macieyko.pablo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-2xl hover:text-gray-400"
          />
        </a>
        <a
          href="https://github.com/PabloMacieyko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-2xl hover:text-gray-400"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-macieyko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl hover:text-gray-400"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
