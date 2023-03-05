import React from "react";
import { Link } from "react-router-dom";

const SectionCarousel = ({ data }) => {
  const { img1, title1, img2, title2, img3, title3 } = data;

  return (
    <div>
      <div className="section_carousel">
        <Link to={`/productos/${title1}`} className="section_carousel-item">
          <img src={img1} alt={title1} />
          <div className="section_carousel-shadow"></div>
        </Link>
        <Link to={`/productos/${title2}`} className="section_carousel-item">
          <img src={img2} alt={title2} />
          <div className="section_carousel-shadow"></div>
        </Link>
        <Link to={`/productos/${title3}`} className="section_carousel-item">
          <img src={img3} alt={title3} />
          <div className="section_carousel-shadow"></div>
        </Link>
      </div>
    </div>
  );
};

export default SectionCarousel;
