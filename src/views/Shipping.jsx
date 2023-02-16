import React from "react";
import Doubts from "../components/Doubts/Doubts";

import { Container } from "react-bootstrap";

const Shipping = () => {
  return (
    <>
      <Container fluid="lg">
        <div className="shipping-container">
          <div className="row">
            <div className="col-left col-xs-12 col-md-6 col-lg-6 p-3">
              <div className="background-left">
                <div className="img"></div>
                <h5 className="title">Envios</h5>
              </div>
            </div>

            <div className="col-right col-xs-12 col-md-6 col-lg-6 p-3">
              <p className="body2">
                Realizamos envíos a nivel nacional por medio de Correo Argentino
              </p>

              <div className="sub-col-container">
                <div className="sub-col-header col-12">
                  <p className="body2-title">
                    ¿Cuánto tarda en llegar mi pedido?{" "}
                  </p>
                </div>
                <p className="col-12 body3">
                  Nos toma entre 48 y 72 horas en despachar tu pedido a la
                  empresa de correo.
                  <br />
                  El tiempo de llegada, depende de la compañía de correo y de tu
                  ubicación.
                </p>
              </div>
              <div className="sub-col-container">
                <div className="sub-col-header col-12">
                  <p className="body2-title"> Seguimiento de los pedidos </p>
                </div>
                <p className="body3">
                  Al momento en el que tu pedido este en manos de la empresa de
                  envíos se te entregara un numero de guía para que puedas
                  hacerle seguimiento a tu pedido y puedas estar pendiente de su
                  llegada.
                </p>
              </div>
              <div className="sub-col-container">
                <div className="sub-col-header col-12">
                  <p className="body2-title"> Envíos exprés </p>
                </div>
                <p className="body3">
                  No realizamos pedidos expres ya que dependemos de los tiempos
                  de entrega de las compañía.
                </p>
              </div>
              <div className="sub-col-container">
                <p className="body3">
                  Si deseas saber más sobre los costos de despacho clickea en el
                  siguiente enlace.
                </p>
                <br />
                <a href="#">Ver costos de despacho</a>
              </div>
            </div>
          </div>
          <Doubts />
        </div>
      </Container>
      <section className="shipping-footer">
        <figure className="circle"></figure>
        <div className="img"></div>
      </section>
    </>
  );
};

export default Shipping;
