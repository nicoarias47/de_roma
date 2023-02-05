import "./style.css";
import React from "react";
import SectionGroup from "./SectionGroup";
import MainCarousel from "../components/MainCarousel/MainCarousel";

const Home = () => {
  return (
    <div className="test-home">
      <MainCarousel />
      <div className="info-icons-container">
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
      </div>
      <SectionGroup />
    </div>
  );
};

export default Home;
