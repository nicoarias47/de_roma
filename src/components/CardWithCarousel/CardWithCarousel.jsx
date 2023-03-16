import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { WspIcon } from "../../assets/SVG/wsp-icon";

const CardWithCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {data.map((products) => {
        return (
          <Card key={products.id} className="card_carousel">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={true}
            >
              {products.list.map(({ img, title }) => {
                return (
                  <Carousel.Item key={title}>
                    <img className="d-block w-100" src={img} alt={title} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <Card.Body>
              <ul>
                {products.list.map(({ title }) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
              <a
                href="https://wa.me/c/5491161845560"
                target="_blank"
                rel="wppcatalogo"
                className="wsp-button"
              >
                <Button>
                  <WspIcon stroke={"#ffffff"} />
                  Ver catálogo
                </Button>
              </a>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default CardWithCarousel;
