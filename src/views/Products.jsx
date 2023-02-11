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
      <section className="products py-5">
        <div className="row">
          <div className="col products_list">
            <CarouselAbstract data={itemSelect} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Products;
