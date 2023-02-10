import React from "react";
import { Container } from "react-bootstrap";

const SectionCarousel = ({ data }) => {
  const { img1, title1, img2, title2, img3, title3 } = data;

  return (
    <div>
      <div className="section_carousel">
        <div className="section_carousel-item">
          <span>{title1}</span>
          <img src={img1} alt={title1} />
          <div className="section_carousel-shadow"></div>
        </div>
        <div className="section_carousel-item">
          <span>{title2}</span>
          <img src={img2} alt={title2} />
          <div className="section_carousel-shadow"></div>
        </div>
        <div className="section_carousel-item">
          <span>{title3}</span>
          <img src={img3} alt={title3} />
          <div className="section_carousel-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionCarousel;
