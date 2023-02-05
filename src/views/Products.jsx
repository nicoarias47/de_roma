import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CarouselAbstract from "../components/CardWithCarousel/CardWithCarousel";
import { db } from "../db/db-fake";

const Products = () => {
  const [itemSelect, setItemSelect] = useState([]);
  const { producto } = useParams();

  useEffect(() => {
    setItemSelect(db[producto]);
  }, [producto]);

  return (
    <Container expand="lg">
      <section className="products">
        <h1>
          Inicio <b>| {producto}</b>
        </h1>
        <div className="row">
          <div className="col">
            <CarouselAbstract data={itemSelect} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Products;
