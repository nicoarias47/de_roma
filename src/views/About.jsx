import React from "react";
import { Container } from "react-bootstrap";
import { InstagramIcon } from "../assets/icon/instagram-icon";
import aboutimg from "../assets/img/aboutimg.svg";
import aboutimg2 from "../assets/img/aboutimg2.svg";
import aboutimg3 from "../assets/img/aboutimg3.svg";

const About = () => {
  return (
    <>
      <Container className="about_container" fluid="lg">
        <div className="row">
          <div className="col-left col-xs-12 col-md-6 col-lg-6">
            <section className="section-left">
              <div className="">
                <img className="img-about" src={aboutimg} />
              </div>
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
            <img className="imgabout2" src={aboutimg2} />
          </div>
        </div>

        <div className="row row-3">
          <div className="section-Left-3">
            <img className="imgabout3" src={aboutimg3} />
          </div>
          <div className="background-rectangule"></div>
          <div className="section-right-3">
            <h5>¿Por qué lo hacemos?</h5>
            <p className="body3">
              Lo hacemos por pasión. Queremos ser un referente a la hora en que
              los argentinos se pregunten: ¿Y donde puedo comprar decoración de
              calidad, útil, única y de buen gusto? Y la respuesta sea De Roma.
            </p>
          </div>
        </div>
      </Container>
      <section className="section4">
        <h5>Seguínos y se parte de esta comunidad</h5>
        <div className="section4-social">
          <InstagramIcon stroke={"#B99470"} fill={"#B99470"} />
        </div>
      </section>
      <section className="about_section-footer">
        <div className="circle"></div>
      </section>
    </>
  );
};

export default About;
