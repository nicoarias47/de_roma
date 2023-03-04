import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CarouselAbstract from "../components/CardWithCarousel/CardWithCarousel";
import Suscribe from "../components/Suscribe/Suscribe";
import { db } from "../db/db-fake";
import CardItem from "../components/CardItem/CardItem";

const Products = () => {
  const [itemSelect, setItemSelect] = useState([]);
  const [loading, setLoading] = useState(true);
  const { producto } = useParams();

  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  useEffect(() => {
    setItemSelect(db[producto]);
    setLoading(false);
  }, [producto]);

  return (
    <>
      <Container expand="lg">
        <section className="products py-5">
          <div className="row">
            {loading ? (
              ""
            ) : (
              <div>
                {isMobile ? (
                  <div className="col products_list">
                    <h1>{itemSelect[0].title}</h1>
                    <CarouselAbstract data={itemSelect} />
                  </div>
                ) : (
                  <div className="row card_products gap-2 d-flex flex-wrap justify-content-center">
                    <h4>{itemSelect[0].title}</h4>
                    <CardItem data={itemSelect[0]} />
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        <Suscribe />
      </Container>
      <section className="products_section-footer">
        <div className="circle"></div>
      </section>
    </>
  );
};

export default Products;
