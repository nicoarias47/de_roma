import React from "react";
import { Link } from "react-router-dom";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import SectionCarousel from "../components/SectionCarousel/SectionCarousel";
//imgscarousel
import living from "../assets/img/sectioncarousel/living.svg";
import aromatizantes from "../assets/img/sectioncarousel/aromatizantes.svg";
import baño from "../assets/img/sectioncarousel/baño.svg";
import textiles from "../assets/img/sectioncarousel/textiles.svg";
import jardin from "../assets/img/sectioncarousel/jardin.svg";
import contenedores from "../assets/img/sectioncarousel/contenedores.svg";
//imglinks
import envios from "../assets/icon/envios.svg";
import payments from "../assets/icon/payments.svg";
import faq from "../assets/icon/faq.svg";
import Advertising from "../components/Advertising/Advertising";
import Suscribe from "../components/Suscribe/Suscribe";


const Home = () => {


  const carouselOne = {
    img1: living,
    // title1: "Living & Deco",
    img2: aromatizantes,
    // title2: "Aromatizantes",
    img3: baño,
    // title3: "Baño",
  };
  const carouselTwo = {
    img1: textiles,
    // title1: "Textiles",
    img2: jardin,
    // title2: "Jardin",
    img3: contenedores,
    // title3: "Contenedores",
  };
  return (<>
     <Advertising/>
    <div className="home">
      
      <MainCarousel />
   
      <section>
      <b className="body3 body3-desktop"> PRODUCTOS </b>
      <b className="body3 body3-mobile"> Living & Deco / Aromatizantes / Baño </b>
      <SectionCarousel data={carouselOne} />
      <b className="body3 body3-mobile"> Textiles / Jardín / Organización </b>
      <SectionCarousel data={carouselTwo} />
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
      <Suscribe/>
      <section className="contact_section-footer">
        <div className="circle"></div>
      </section>
    </div>
    </>
  );
};

export default Home;
