import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Shipping from "./Shipping";
import paymentimg2 from "../assets/img/paymentimg2.svg";
import circlepaymentimg2 from "../assets/img/circlepaymentimg2.svg";

const Faq = () => {
  return (
    <>
      <div class="row">
        <div class="col-left col-xs-12 col-md-6 col-lg-6 p-3">
          <div className="background-left">
            <img className="payment-img" src={paymentimg2} />
            <div className="payment-rectangule">
              <h5>Preguntas Frecuentes</h5>
            </div>
          </div>
        </div>
        <div class="col-right col-xs-12 col-md-6 col-lg-6 p-3">
          <p className="body2">estas son las preguntas mas frecuentes</p>
     
          <div className="">
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
      </div>

      <Shipping />

      <div className="circle-container">
        <div className="bg-circle-payment"></div>
        <img className="circle-payment-img" src={circlepaymentimg2}></img>
      </div>
    </>
  );
};

export default Faq;
