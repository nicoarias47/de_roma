import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carrouselphoto1 from "../../assets/JPG/bannersprincipales/1.jpg";
import carrouselphoto2 from "../../assets/JPG/bannersprincipales/2.jpg";
import carrouselphoto3 from "../../assets/JPG/bannersprincipales/3.jpg";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="ControlledCarousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img className="CarouselPhoto" src={carrouselphoto1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img className="CarouselPhoto" src={carrouselphoto2} alt="First slide" />

        {/* <Carousel.Caption> */}
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img className="CarouselPhoto" src={carrouselphoto3} alt="First slide" />

        {/* <Carousel.Caption> */}
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
