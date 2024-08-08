import React from "react";

const Project = ({ title, description, link, darkMode, buttonText }) => {
  return (
    <div
      className={` p-4 mb-4 ${
        darkMode
          ? "bg-black-700 text-white bg-opacity-30"
          : "bg-black-200 text-black bg-opacity-30"
      }`}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <a href={link} className="font-bold text-green-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
        {buttonText}
      </a>
    </div>
  );
};

export default Project;