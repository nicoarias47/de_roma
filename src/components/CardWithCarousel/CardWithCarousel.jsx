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
    <div>
      {data.map((el) => {
        console.log(el.img);
        return (
          <Card style={{ width: "100%" }} key={el.title}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img className="d-block w-100" src={el.img} alt="" />
                <Carousel.Caption>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.description}</Card.Text>
              <Button variant="primary">Ver mas {el.title}</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardWithCarousel;
