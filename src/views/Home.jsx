import React from "react";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import SectionCarousel from "../components/SectionCarousel/SectionCarousel";
import img from "../assets/img/difu.png";

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
      {/* <div className="info-icons-container">
        <ul className="info-icons">
          <li>
            <a className="envios" href="#">
              <i className="fa fa-truck fa-inverse" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="pagos" href="#">
              <i className="fa fa-money fa-inverse"></i>
            </a>
          </li>
          <li>
            <a className="entregas" href="#">
              <i className="fa fa-share-square-o fa-inverse"></i>
            </a>
          </li>
        </ul>
      </div> */}
      <SectionCarousel data={carouselOne} />
      <SectionCarousel data={carouselOne} />
    </div>
  );
};

export default Home;
