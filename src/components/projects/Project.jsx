import React from "react";

const Project = ({ title, description, link, darkMode, buttonText }) => {
  return (
    <div
      className={`border p-4 mb-4 ${
        darkMode
          ? "bg-gray-700 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <a href={link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        {buttonText}
      </a>
    </div>
  );
};

export default Project;