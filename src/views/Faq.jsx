import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Shipping from "./Shipping";

const Faq = () => {
  return (
    <>
      <p className="showpath"> Inicio | Quienes Somos </p>

      <h3 className="faq-title">¿En que podemos ayudarte?</h3>
      <div className="faq-container">
        <Accordion defaultActiveKey="0">
          <p className="faq-subtitle">estas son las preguntas mas frecuentes</p>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <b className="faq-header">¿Realizan envíos nacionales?</b>
            </Accordion.Header>
            <Accordion.Body>
              <p>
              Sí, hacemos envíos a todo el país con dos empresas muy serias y
              puntuales.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <b className="faq-header" >¿Puedo retirar mi pedido en un punto físico?</b>
            </Accordion.Header>
            <Accordion.Body>
              <p className="faq-body">
              Sí, actualmente tenemos tres puntos de retiro, lomas de Temperlay,
              Plaza Egaña y obelisco.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <b className="faq-header">
                ¿Qué pasa si no me encuentro en mi domicilio en el momento de la
                entrega acordada?
              </b>
            </Accordion.Header>
            <Accordion.Body>
              <p className="faq-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias dicta, distinctio dolores culpa dolorum inventore.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <b className="faq-header">¿Puedo devolver o cambiar un producto?</b>
            </Accordion.Header>
            <Accordion.Body>
              <p className="faq-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias dicta, distinctio dolores culpa dolorum inventore.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <b className="faq-header" >¿Qué pasa si al recibir un pedido, falta un producto?</b>
            </Accordion.Header>
            <Accordion.Body>
              <p className="faq-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias dicta, distinctio dolores culpa dolorum inventore.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <b className="faq-header" >¿Realizan ventas al por mayor?</b>
            </Accordion.Header>
            <Accordion.Body>
              <p className="faq-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias dicta, distinctio dolores culpa dolorum inventore.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <b className="faq-header" >¿Van a reponer los productos sin stock?</b>
            </Accordion.Header>
            <Accordion.Body>
              <p className="faq-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias dicta, distinctio dolores culpa dolorum inventore.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Shipping />
    </>
  );
};

export default Faq;
