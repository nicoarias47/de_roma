import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

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
                {products.list.map(({ title, i }) => (
                  <li key={i}>{title}</li>
                ))}
              </ul>
              <Button>Ver catalogo</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default CardWithCarousel;
