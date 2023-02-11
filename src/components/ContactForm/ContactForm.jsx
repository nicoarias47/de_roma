import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  //const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="contact">
      <div className="contact-form">
        <h2>Déjanos tu mensaje</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            className="form-name"
            onChange={handleChange}
            value={form.name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="form-email"
            onChange={handleChange}
            value={form.email}
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Escribe un mensaje"
            className="form-message"
            onChange={handleChange}
            value={form.message}
            required
          ></textarea>
          <input type="submit" value="Enviar mensaje" className="form-button" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
