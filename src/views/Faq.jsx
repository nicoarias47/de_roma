import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Doubts from "../components/Doubts/Doubts";
import { Container } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <Container fluid="lg" className="faq_section">
        <div className="row faq_section-grid">
          <section className="col-12 faq_section-hero">
            <div className="faq_section-background">
              <div className="faq_section-img"></div>
            </div>
            <div className="row d-flex justify-content-center faq_section-description ">
              <h5 className="col-8 faq_section-title ">Preguntas Frecuentes</h5>
            </div>
          </section>
          <section className="faq_section-accordion col-12">
            <p className="body2">Estas son las preguntas mas frecuentes</p>
            <Accordion defaultActiveKey="7">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <b className="body3">¿Realizan envíos nacionales?</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Sí, hacemos envíos a todo el país con dos empresas muy
                    serias y puntuales.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <b className="body3">
                    ¿Puedo retirar mi pedido en un punto físico?
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    Sí, lo puedes recoger por
                    Lomas o Temperley.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <b className="body3">
                    ¿Qué pasa si no me encuentro en mi
                    domicilio en el momento de la
                    entrega acordada?
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    El producto regresa a nosotras y el
                    envío debe abonarse.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <b className="body3">
                  ¿Puedo devolver o cambiar un producto? 
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    Sí, lo puedes recoger por
                    Lomas o Temperley.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <b className="body3">
                    ¿Qué pasa si al recibir un pedido,
                    falta un producto?
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    En ese caso nos hacemos
                    responsables y lo enviamos
                    nuevamente el producto faltante.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <b className="body3">¿Realizan ventas al por mayor?</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    Solamente de velas y difusores.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <b className="body3">
                    ¿Van a reponer los productos sin
                    stock?
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    Algunos si, otros no porque son ediciones
                    limitadas.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
          <section className="faq_decoration">
            <div className="faq_decoration-img"></div>
            <div className="faq_decoration-rectangletop"></div>
            <div className="faq_decoration-rectanglebot"></div>
          </section>
          <div className="col-12 faq_section-doubts">
            <div className="row">
              <div className="col"></div>
              <div className="col-sm-12 col-md-8 col-lg-6">
                <Doubts />
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </Container>
      <section className="faq_section-footer">
        <div className="circle"></div>
      </section>
    </>
  );
};

export default Faq;
