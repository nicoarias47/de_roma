import React from "react";
import { Container } from "react-bootstrap";
import Doubts from "../components/Doubts/Doubts";
import aboutimg2 from "../assets/img/aboutimg2.svg"
const About = () => {
  return (
    <>
      <Container className="about_container" fluid="lg">
        <div className="row">
          <div className="col-left col-xs-12 col-md-6 col-lg-6">
            <section className="section-left">
              <div className="img-about"></div>
              <div className="about-title">
                <h5>Chicas</h5>
                <h5>DeRoma</h5>
              </div>
            </section>
          </div>
          <div className="col-right col-xs-12 col-md-6 col-lg-6"></div>
          <section className="section-right">
            <h5> ¿Quienes somos? </h5>
            <p className="body3">
              Aca hay un poco de todo, hermanas, amigas y socias, Anto y Marijo,
              vivimos en la Provincia de Buenos Aires y este proyecto comenzó
              con la idea de poder crear espacios únicos y llegar a todos los
              hogares de Argentina.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <div className="section-Left-2">
            <h5>¿En qué nos diferenciamos?</h5>
            <p className="body3">
              Traemos y seleccionamos productos que están fuera de lo común, eso
              que ves en todos lados repetido acá no lo vas a encontrar, ya que
              nuestra misión es poder hacer de tus espacios algo único, que
              reflejen quien sos.
            </p>
          </div>
          <div className="section-right-2">
            <img className="imgabout2" src={aboutimg2}/>
          </div>
        </div>

        <Doubts />
      </Container>
    </>
  );
};

export default About;
