import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactCard = ({ language, darkMode }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("All fields are required.");
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
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("An error occurred.");
    }
  };

  const contactText = {
    es: "Contáctame",
    en: "Contact Me",
  };

  const nameLabel = {
    es: "Nombre",
    en: "Name",
  };

  const emailLabel = {
    es: "Correo Electrónico",
    en: "Email",
  };

  const messageLabel = {
    es: "Mensaje",
    en: "Message",
  };

  const sendButtonText = {
    es: "Enviar",
    en: "Send",
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 bg-opacity-90" : "bg-gray-100 bg-opacity-80"
      } p-6 rounded-lg w-full max-w-4xl`}
    >
      <h3 className="text-2xl font-bold mb-4 text-center">
        {contactText[language]}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            {nameLabel[language]}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            {emailLabel[language]}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            {messageLabel[language]}
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`border p-2 w-full rounded-md ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
        >
          {sendButtonText[language]}
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-center">{status}</p>}
    </div>
  );
};

export default ContactCard;
