import React from "react";
import { Container } from "react-bootstrap";
import { EmailIcon } from "../assets/icon/email-icon.jsx";
import { InstagramIcon } from "../assets/icon/instagram-icon.jsx";
import { WspIcon } from "../assets/icon/wsp-icon.jsx";
import ContactForm from "../components/ContactForm/ContactForm";
import Suscribe from "../components/Suscribe/Suscribe";

const Contact = () => {
  return (
    <>
      <Container fluid="lg" className="contact_section">
        <section className="contact_section-hero">
          <div className="contact_section-img"></div>
          <h5 className="contact_section-title">Contáctanos</h5>
        </section>
        <section className="contact_section-redes">
          <div className="row">
            <div className="col-12 d-flex gap-2 align-items-center">
              <WspIcon stroke={"#B99470"} />
              <span>+54 11 6184-5560</span>
            </div>
            <div className="col-12 d-flex gap-2 align-items-center">
              <EmailIcon stroke={"#B99470"} />
              <span>drdecohome@gmail.com</span>
            </div>
            <div className="col-12 d-flex gap-2 align-items-center">
              <InstagramIcon stroke={"#B99470"} fill={"#B99470"} />
              <span>de.roma_deco</span>
            </div>
          </div>
        </section>
        <section className="contact_section-description">
          <h6>
            Tienes alguna pregunta que no hayamos resuelto en la pagina?
            Escríbenos!
          </h6>
          <span>
            Completá la información y nos contactamos lo más pronto posible ten
            en cuenta que nuestro horario de atención de de Lunes a Lunes hasta
            las 21:00 horas.
          </span>
        </section>
        <ContactForm />
        <Suscribe />
      </Container>
      <section className="contact_section-footer">
        <div className="circle"></div>
      </section>
    </>
  );
};

export default Contact;
