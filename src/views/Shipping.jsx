import React from "react";
import Doubts from "../components/Doubts/Doubts";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <>
      <Container fluid="lg" className="shipping_section">
        <div className="row shipping_section-grid">
          <section className="col-12 payment_section-hero">
            <div className="shipping_section-background">
              <div className="shipping_section-img"></div>
            </div>
            <div className="row d-flex justify-content-center shipping_section-description ">
              <h5 className="col-8 payment_section-title ">Envios</h5>
            </div>
          </section>
          <section className="col-12 shipping_section-content">
            <div className="row shipping_content">
              <h6 className="shipping_content-title">
                Realizamos envíos a nivel nacional por medio de Correo Argentino
                y mensajería privada.
              </h6>
              <h6 className="shipping_content-subtitle">
                ¿Cuánto tarda en llegar mi pedido?
              </h6>
              <span className="shipping_content-description">
                Nos toma entre 48 y 72 horas hábiles en despachar tu pedido a la
                empresa de correo.
              </span>
              <span className="shipping_content-description">
                El tiempo de llegada, depende de la compañía de correo y de tu
                ubicación.
              </span>
              <h6 className="shipping_content-subtitle">
                Seguimiento de los pedidos{" "}
              </h6>
              <span className="shipping_content-description">
                Al momento en el que tu pedido este en manos de la empresa de
                envíos, se te entregará un número de guía para que puedas
                hacerle seguimiento a tu pedido y puedas estar pendiente de su
                llegada.
              </span>
              <h6 className="shipping_content-subtitle">Envíos exprés</h6>
              <span className="shipping_content-description">
                Realizamos envíos exprés con otros costos, el mismo se actualiza
                al momento de hacer la compra.
              </span>
              {/* <span className="shipping_content-description">
                Si deseas saber más sobre los costos de despacho dale click en
                el siguiente enlace.
              </span>
              <Link className="shipping_content-link">
                Ver costos de despacho
              </Link> */}
            </div>
          </section>
          <section className="shipping_decoration">
            <div className="shipping_decoration-img"></div>
            <div className="shipping_decoration-rectangletop"></div>
            <div className="shipping_decoration-rectanglebot"></div>
          </section>
          <div className="col-12 py-5 shipping_section-doubts">
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
      <section className="shipping-footer">
        <div className="circle"></div>
      </section>
    </>
  );
};

export default Shipping;
