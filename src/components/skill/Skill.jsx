import React from "react";
import { FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiDotnet,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFirebase,
} from "react-icons/si";

const Skill = ({ t, darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 bg-opacity-40" : "bg-gray-100 bg-opacity-40"
      } flex flex-col items-center justify-center p-8 mb-8 w-full max-w-4xl text-center rounded-lg`}
    >
      <h2 className="text-3xl font-bold mb-8">{t.skillsTitle}</h2>

      {/* Frontend Skills */}
      <div className="mb-12 w-full">
        <h3 className="text-xl font-semibold mb-6">Frontend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          <div className="flex flex-col items-center">
            <FaReact
              size={50}
              className="transition-transform duration-300 transform hover:scale-150 hover:text-blue-400"
            />
            <p className="mt-2">React</p>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript
              size={50}
              className="transition-transform duration-300 transform hover:scale-150 hover:text-yellow-300"
            />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <SiBootstrap
              size={50}
              className="transition-transform duration-300 transform hover:scale-150 hover:text-purple-500"
            />
            <p className="mt-2">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <SiHtml5
              size={50}
              className="transition-transform duration-300 transform hover:scale-150 hover:text-orange-500"
            />
            <p className="mt-2">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <SiCss3
              size={50}
              className="transition-transform duration-300 transform hover:scale-150 hover:text-blue-500"
            />
            <p className="mt-2">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss
              size={50}
              className="transition-transform duration-300 transform hover:scale-150 hover:text-sky-500"
            />
            <p className="mt-2">Tailwind</p>
          </div>
        </div>
      </div>

      {/* Backend Skills */}
      <div className="w-full">
        <h3 className="text-xl font-semibold mb-6">Backend</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <SiDotnet
              size={50}
              className="transition-transform duration-300 transform hover:scale-150 hover:text-purple-500"
            />
            <p className="mt-2">.NET</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb
              size={50}
              className="transition-transform duration-300 transform hover:scale-150 hover:text-green-500"
            />
            <p className="mt-2">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <SiFirebase
              size={50}
              className="transition-transform duration-300 transform hover:scale-150 hover:text-yellow-500"
            />
            <p className="mt-2">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
