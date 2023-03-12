import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';


const ContactForm = () => {
const [message, setMessage] = useState("Enviar Mensaje");

  const sendEmail = (event) => {
    event.preventDefault();
    //aca se captura(serviceID, templateID, el evento , el key public)
    emailjs.sendForm('service_rfj0nyn','template_3sbdega', event.target,'T7D63srxE6X0p2-bi')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    event.target.reset();


    setTimeout(() => {
      setMessage("Mensaje enviado ✓");
    }, 1000);
    
  }

  


useEffect(() => {}, []);

  return (
    <div className="contact_form">
      <form className="form title-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Nombre Completo"
          className="form-name"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="E-mail"  
          className="form-email"
          required
        />
        <textarea
          name="user_message"
          rows="10"
          placeholder="Escribe un mensaje"
          className="form-message"
          required
        ></textarea>
        <input type="submit" value={message} className="form-button" />
      </form>
    </div>
  );
};

export default ContactForm;
