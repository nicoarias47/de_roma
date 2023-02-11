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
      {data.map((el) => {
        return (
          <Card key={el.id} className="card_carousel">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
            >
              <Carousel.Item>
                <img className="d-block w-100" src={el.img} alt={el.title} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={el.img} alt={el.title} />
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.description}</Card.Text>
              <Button>Ver catalogo</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default CardWithCarousel;
