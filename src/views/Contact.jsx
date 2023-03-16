import React from "react";
import { Container } from "react-bootstrap";
import { EmailIcon } from "../assets/SVG/email-icon.jsx";
import { InstagramIcon } from "../assets/SVG/instagram-icon.jsx";
import { WspIcon } from "../assets/SVG/wsp-icon.jsx";
// import ContactForm from "../components/ContactForm/ContactForm";
import ContactForm from "../components/ContactForm/ContactForm";
import Suscribe from "../components/Suscribe/Suscribe";

const Contact = () => {
  return (
    <>
      <Container fluid="lg" className="contact_section">
        <div className="row contact_section-grid">
          <section className="col-12 contact_section-hero">
            <div className="contact_section-background">
              <div className="contact_section-img"></div>
            </div>
            <div className="row d-flex justify-content-center contact_section-description ">
              <h5 className="col-8 contact_section-title ">Contáctanos</h5>
            </div>
          </section>
          <section className="col-12 contact_section-redes">
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
          <section className="col-12 contact_section-description">
            <h6>
              Tienes alguna pregunta que no hayamos resuelto en la página?
              Escríbenos!
            </h6>
            <span>
              Completa la información y nos contactamos lo más pronto posible. Ten en cuenta que nuestro horario de atención es de Lunes a Lunes hasta las 21:00 horas.
            </span>
            {/* <ContactForm /> */}
            <ContactForm />
          </section>
          <section className="contact_decoration">
            <div className="contact_decoration-img"></div>
            <div className="contact_decoration-rectangletop"></div>
            <div className="contact_decoration-rectanglebot"></div>
          </section>
          <div className="col-12 contact_section-suscribe">
            <div className="row">
              <div className="col"></div>
              <div className="col-sm-12 col-md-8 col-lg-6">
                <Suscribe />
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </Container>
      <section className="contact_section-footer">
        <div className="circle"></div>
      </section>
    </>
  );
};

export default Contact;
