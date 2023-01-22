import "./style.css";
import React from "react";
import SectionGroup from "./SectionGroup";
import HomeCarousel from "../components/Carousel/HomeCarousel"
const Home = () => {
  return (
    <div className="test-home">
      <HomeCarousel/>
          <div class="info-icons-container">
            <ul class="info-icons">
              <li><a class="envios" href="#"><i class="fa fa-truck fa-inverse" aria-hidden="true"></i></a></li>
              <li><a class="pagos" href="#"><i class="fa fa-money fa-inverse" ></i></a></li>
              <li><a class="entregas" href="#"><i class="fa fa-share-square-o fa-inverse"></i></a></li>
            </ul>
          </div>
      <SectionGroup/> 
    </div>
  );
};

export default Home;
