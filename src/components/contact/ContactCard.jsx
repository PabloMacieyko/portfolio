import React, { useState } from "react";
import emailjs from "emailjs-com";
import translations from "../translations/translations";

const ContactCard = ({ language, darkMode }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const t = translations[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus(t.requiredFields);
      return;
    }

    try {
      const result = await emailjs.send(
        "service_ihe3y02", // Reemplaza con tu Service ID
        "template_v1u4i1s", // Reemplaza con tu Template ID
        form,
        "0eVljFkZP5aAwtIao" // Reemplaza con tu User ID
      );

      if (result.text === "OK") {
        setStatus(t.success);
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(statusMessages[language].failure);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus(t.error);
    }
  };


  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 bg-opacity-80" : "bg-gray-100 bg-opacity-40"
      } p-6 rounded-lg w-full max-w-4xl`}
    >
      <h3 className="text-2xl font-bold mb-4 text-center">
        {t.contactText}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            {t.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md ${
              darkMode ? "bg-gray-700 text-white bg-opacity-10" : "bg-white text-black bg-opacity-10"
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            {t.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md ${
              darkMode ? "bg-gray-700 text-white bg-opacity-10" : "bg-white text-black bg-opacity-10"
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            {t.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md ${
              darkMode ? "bg-gray-700 text-white bg-opacity-10" : "bg-white text-black bg-opacity-10"
            }`}
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full bg-opacity-30"
        >
          {t.sendButtonText}
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-center">{status}</p>}
    </div>
  );
};

export default ContactCard;
