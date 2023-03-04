import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Suscribe = () => {
  const [message, setMessage] = useState("Suscribirme");

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_rfj0nyn",
        "template_vle88oo",
        event.target,
        "T7D63srxE6X0p2-bi"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    event.target.reset();

    setTimeout(() => {
      setMessage("Gracias por suscribirte");
    }, 1000);
  };

  useEffect(() => {}, []);

  return (
    <>
      <section className="suscribe-container">
        <h5>Suscribete a nuestra lista</h5>
        <p className="body3">
          Y entérate de todas la <strong>novedades</strong> y{" "}
          <strong>descuentos</strong> que tenemos para ti.
        </p>
        <form className="suscribe-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="suscribe_email"
            placeholder="Email"
            className="form-email"
            required
          />
          <input type="submit" value={message} className="suscribe-button" />
        </form>
      </section>
    </>
  );
};

export default Suscribe;
