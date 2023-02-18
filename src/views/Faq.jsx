import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Doubts from "../components/Doubts/Doubts";
import { Container } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <Container fluid="lg" className="">
        <div className="row">
          <div className="col-left col-xs-12 col-md-6 col-lg-6">
            <section className="faq_section-hero">
              <div className="faq_section-img"></div>
              <h5 className="faq_section-title">Preguntas Frecuentes</h5>
            </section>
          </div>
          <div className="col-right col-xs-12 col-md-6 col-lg-6">
            <p className="body2">estas son las preguntas mas frecuentes</p>
            <Accordion defaultActiveKey="0">
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
                    Sí, actualmente tenemos tres puntos de retiro, lomas de
                    Temperlay, Plaza Egaña y obelisco.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <b className="body3">
                    ¿Qué pasa si no me encuentro en mi domicilio en el momento
                    de la entrega acordada?
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dicta, distinctio dolores culpa dolorum inventore.
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dicta, distinctio dolores culpa dolorum inventore.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <b className="body3">
                    ¿Qué pasa si al recibir un pedido, falta un producto?
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dicta, distinctio dolores culpa dolorum inventore.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <b className="body3">¿Realizan ventas al por mayor?</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dicta, distinctio dolores culpa dolorum inventore.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <b className="body3">
                    ¿Van a reponer los productos sin stock?
                  </b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="body4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Molestias dicta, distinctio dolores culpa dolorum inventore.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <Doubts />
      </Container>
      <section className="faq_section-footer">
        <div className="circle"></div>
        <div className="img"></div>
      </section>
    </>
  );
};

export default Faq;
