import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CarouselAbstract from "../components/CardWithCarousel/CardWithCarousel";
import Suscribe from "../components/Suscribe/Suscribe";
import { db } from "../db/db-fake";
import CardItem from "../components/CardItem/CardItem";
import { WspIcon } from "../assets/SVG/wsp-icon";

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
                    <h4>{itemSelect[0].title}</h4>
                    <CarouselAbstract data={itemSelect} />
                  </div>
                ) : (
                  <div className="row card_products d-flex flex-wrap justify-content-center">
                    <h4>{itemSelect[0].title}</h4>
                    <div className="card-items-container">
                    <CardItem data={itemSelect[0]} />
                    </div>
                    <div className="d-flex align-items-center justify-content-center py-5">
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
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        <div className="col-12 contact_section-suscribe">
          <div className="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-8 col-lg-6">
              <Suscribe />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </Container>
      <section className="products_section-footer">
        <div className="circle"></div>
      </section>
    </>
  );
};

export default Products;
