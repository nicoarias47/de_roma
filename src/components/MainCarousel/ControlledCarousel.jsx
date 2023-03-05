import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carrouselphoto1 from "../../assets/JPG/bannersprincipales/1.jpg";
import carrouselphoto2 from "../../assets/JPG/bannersprincipales/2.jpg";
import carrouselphoto3 from "../../assets/JPG/bannersprincipales/3.jpg";
import { useMediaQuery } from "react-responsive";
import carrouselphoto4 from "../../assets/JPG/bannersprincipales/1mobile.jpg";
import carrouselphoto5 from "../../assets/JPG/bannersprincipales/2mobile.jpg";
import carrouselphoto6 from "../../assets/JPG/bannersprincipales/3mobile.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <>    {isMobile ? (
      <Carousel className="ControlledCarousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="CarouselPhotoMobile" src={carrouselphoto4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="CarouselPhotoMobile" src={carrouselphoto5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="CarouselPhotoMobile" src={carrouselphoto6} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    ) : (
      <Carousel className="ControlledCarousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="CarouselPhoto" src={carrouselphoto1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="CarouselPhoto" src={carrouselphoto2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="CarouselPhoto" src={carrouselphoto3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    )
    }
    </>

  );
}

export default ControlledCarousel;
