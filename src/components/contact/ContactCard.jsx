import React, { useState } from "react";
import emailjs from "emailjs-com";
import translations from "../translations/translations";
import "./ContactCard.css";

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
        setStatus(t.failure);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus(t.error);
    }
  };

  return (
    <div
      className={`contact-card-container ${
        darkMode ? "contact-card-container-dark" : "contact-card-container-light"
      }`}
    >
      <h3 className="contact-card-title">{t.contactText}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="contact-card-label" htmlFor="name">
            {t.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`contact-card-input ${
              darkMode
                ? "contact-card-input-dark"
                : "contact-card-input-light"
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="contact-card-label" htmlFor="email">
            {t.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`contact-card-input ${
              darkMode
                ? "contact-card-input-dark"
                : "contact-card-input-light"
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="contact-card-label" htmlFor="message">
            {t.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`contact-card-textarea ${
              darkMode
                ? "contact-card-textarea-dark"
                : "contact-card-textarea-light"
            }`}
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="contact-card-button"
        >
          {t.sendButtonText}
        </button>
      </form>
      {status && <p className="contact-card-status">{status}</p>}
    </div>
  );
};

export default ContactCard;
