import React from "react";
import { Container } from "react-bootstrap";
import { EmailIcon } from "../assets/icon/email-icon.jsx";
import { InstagramIcon } from "../assets/icon/instagram-icon.jsx";
import { WspIcon } from "../assets/icon/wsp-icon.jsx";
import ContactForm from "../components/ContactForm/ContactForm";
import Suscribe from "../components/Suscribe/Suscribe.jsx";

const Contact = () => {
  return (
    <Container fluid="lg" className="contact_section">
      <section className="contact_section-hero">
        <div className="contact_section-img"></div>
        <h2 className="contact_section-title">Contáctanos</h2>
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
      <ContactForm />
      {/* <Suscribe /> */}
    </Container>
  );
};

export default Contact;
