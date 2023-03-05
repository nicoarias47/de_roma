import React from "react";
import { Container } from "react-bootstrap";
import { InstagramIcon } from "../assets/icon/instagram-icon";
import aboutimg from "../assets/JPG/about/1.jpg";
import aboutimg2 from "../assets/JPG/about/2.jpg";
import aboutimg3 from "../assets/JPG/about/3.jpg";

const About = () => {
  return (
    <>
      <Container className="about_section" fluid="lg">
        <div className="row about_section-grid">
          <section className="col-12 about_section-hero">
            <div className="about_section-background">
              <img className="about_section-img" src={aboutimg} />
            </div>
            <div className="row d-flex justify-content-center about_section-description ">
              <h4 className="col-8 about_section-title ">Chicas</h4>
              <h4 className="col-8 about_section-title ">DeRoma</h4>
            </div>
          </section>
          <section className="about_section-who">
            <h5> ¿Quienes somos? </h5>
            <span>
              Aca hay un poco de todo, hermanas, amigas y socias, Anto y Marijo,
              vivimos en la Provincia de Buenos Aires y este proyecto comenzó
              con la idea de poder crear espacios únicos y llegar a todos los
              hogares de Argentina.
            </span>
          </section>
          <section className="about_section-different">
            <div className="different-description">
              <h5>¿En qué nos diferenciamos?</h5>
              <span>
                Traemos y seleccionamos productos que están fuera de lo común,
                eso que ves en todos lados repetido acá no lo vas a encontrar,
                ya que nuestra misión es poder hacer de tus espacios algo único,
                que reflejen quien sos.
              </span>
            </div>
            <div className="different-img">
              <img className="imgabout2" src={aboutimg2} />
            </div>
          </section>
          <section className="about_section-because">
            <div className="because-background"></div>
            <div className="becasuse-description">
              <h5>¿Por qué lo hacemos?</h5>
              <span>
                Lo hacemos por pasión. Queremos ser un referente a la hora en
                que los argentinos se pregunten: ¿Y donde puedo comprar
                decoración de calidad, útil, única y de buen gusto? Y la
                respuesta sea De Roma.
              </span>
            </div>
            <div className="becasuse-img">
              <img className="imgabout3" src={aboutimg3} />
            </div>
          </section>
        </div>
      </Container>
      <div className=" d-flex justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <section className="section4">
            <h5>Síguenos y se parte de esta comunidad</h5>
            <span className="d-none d-md-block pt-4">
              Conoce más sobre De Roma y comparte con nosotros el amor por la
              deco
            </span>
            <div className="section4-social">
              <InstagramIcon stroke={"#B99470"} fill={"#B99470"} />
            </div>
          </section>
        </div>
      </div>
      {/* <section className="about_section-footer">
        <div className="circle"></div>
      </section> */}
    </>
  );
};

export default About;
