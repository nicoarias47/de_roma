import React, { useState } from "react";

const initialState = {
  email: ""
};

const Suscribe = () => {
  const [form, setForm] = useState(initialState);
  //const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return <>
      <section className="suscribe-container">
        <h5>Suscribete a nuestra lista</h5>
        <p className="body3">Y entérate de todas la <strong>novedades</strong> y <strong>descuentos</strong> que tenemos para ti.</p>
        <form className="suscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-email"
          onChange={handleChange}
          value={form.email}
          required
        />
        <input type="submit" value="Suscribirme" className="suscribe-button" />
      </form>
      </section>
  </>;
};

export default Suscribe;
