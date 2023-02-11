import React from "react";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import SectionCarousel from "../components/SectionCarousel/SectionCarousel";
import img from "../assets/img/difu.png";
import envios from "../assets/icon/envios.svg";
import payments from "../assets/icon/payments.svg";
import faq from "../assets/icon/faq.svg";

const Home = () => {
  const carouselOne = {
    img1: img,
    title1: "Living & Deco",
    img2: img,
    title2: "Aromatizantes",
    img3: img,
    title3: "Baño",
  };

  return (
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
            <a className="envios" href="#">
            <img className="" src={envios} />
            <p className="body4"> Envíos </p>
            </a>
          </li>
          <li>
            <a className="pagos" href="#">
             <img className="" src={payments} />
             <p className="body4"> Medios de pago </p> 
            </a>
          </li>
          <li>
            <a className="entregas" href="#">
            <img className="" src={faq} />
            <p className="body4"> Preguntas Frecuentes</p>
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Home;
