import React from "react";
import { Link } from "react-router-dom";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import SectionCarousel from "../components/SectionCarousel/SectionCarousel";
import img from "../assets/img/difu.png";
import envios from "../assets/icon/envios.svg";
import payments from "../assets/icon/payments.svg";
import faq from "../assets/icon/faq.svg";
<<<<<<< HEAD
import Advertising from "../components/Advertising/Advertising";

=======
import Suscribe from "../components/Suscribe/Suscribe";
import { Container } from "react-bootstrap";
>>>>>>> 1dee3d83cf4a40e0f8fbe94aaff8905a4bb66a78

const Home = () => {


  const carouselOne = {
    img1: img,
    title1: "Living & Deco",
    img2: img,
    title2: "Aromatizantes",
    img3: img,
    title3: "Baño",
  };
<<<<<<< HEAD
  return (<>
     <Advertising/>
    <div className="home">
      
      <MainCarousel />
   
      <section>
      <b className="body3"> Living & Deco / Aromatizantes / Baño </b>
      <SectionCarousel data={carouselOne} />
      <b className="body3"> Textiles / Jardín / Organización </b>
      <SectionCarousel data={carouselOne} />
      </section>
         <div className="info-icons-container">
        <ul className="info-icons">

          <li>
          <Link className="envios" to="/envios">       
            <img className="" src={envios} />
            <p className="body4"> Envíos </p>
          </Link>  
          </li>
          <li>
            <Link className="pagos" to="/medios_de_pago">
             <img className="" src={payments} />
             <p className="body4"> Medios de pago </p>
             </Link>
            </li>
          <li>
            <Link className="entregas" to="/preguntas_frecuentes">
            <img className="" src={faq} />
            <p className="body4"> Preguntas Frecuentes</p>
            </Link>
          </li>
        </ul>
      </div>

    </div>
=======

  return (
    <>
      <Container>
        <div className="home">
          <MainCarousel />
          <section>
            <b className="body3"> Living & Deco / Aromatizantes / Baño </b>
            <SectionCarousel data={carouselOne} />
            <b className="body3"> Textiles / Jardín / Organización </b>
            <SectionCarousel data={carouselOne} />
          </section>
          <div className="info-icons-container">
            <ul className="info-icons">
              <li>
                <Link className="envios" to="/envios">
                  <img className="" src={envios} />
                  <p className="body4"> Envíos </p>
                </Link>
              </li>
              <li>
                <Link className="pagos" to="/medios_de_pago">
                  <img className="" src={payments} />
                  <p className="body4"> Medios de pago </p>
                </Link>
              </li>
              <li>
                <Link className="entregas" to="/preguntas_frecuentes">
                  <img className="" src={faq} />
                  <p className="body4"> Preguntas Frecuentes</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <section>
          <Suscribe />
        </section>
      </Container>
      <section className="home_section-footer">
        <div className="circle"></div>
      </section>
>>>>>>> 1dee3d83cf4a40e0f8fbe94aaff8905a4bb66a78
    </>
  );
};

export default Home;
