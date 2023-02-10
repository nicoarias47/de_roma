import React from "react";

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contact-form">
        <h2>Déjanos tu mensaje</h2>
        <form className="form">
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            className="form-name"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="form-email"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Escribe un mensaje"
            className="form-message"
          ></textarea>
          <input type="submit" value="Enviar mensaje" className="form-button" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
