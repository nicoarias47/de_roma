import React from "react";
import "./style.css";
import Doubts from "../components/Doubts/Doubts";
import { Container } from "react-bootstrap";
import imgMp from "../assets/icon/mercadopago.svg";
import imgEfectivo from "../assets/icon/efectivo.svg";
import imgSantander from "../assets/icon/santander.svg";
import imgTransferencia from "../assets/icon/transferencia.svg";

const Payment = () => {
  return (
    <>
      <Container fluid="lg" className="payment_section">
        <div className="row payment_section-grid">
          <section className="col-12 payment_section-hero">
            <div className="payment_section-background">
              <div className="payment_section-img"></div>
            </div>
            <div className="row d-flex justify-content-center payment_section-description ">
              <h5 className="col-8 payment_section-title ">Medios de pago</h5>
            </div>
          </section>
          <section className="col-12 payment_section-content ">
            <h6 className="payment_content-title">
              Estos son los medios de pago que te ofrecemos
            </h6>
            <div className="row payment_content">
              <div className="col-12 py-4">
                <div className="col-12 py-2 d-flex justify-content-between">
                  <h6 className="payment_content-subtitle">Mercado Pago</h6>
                  <img src={imgMp} alt="" className="px-5" />
                </div>
                <div className="col-12">
                  <span className="payment_content-description">
                    Una vez elijas los productos que vayas a comprar, comunícate
                    con nosotros por WhatsApp y te enviaremos el detalle con el
                    monto y el link a Mercado Pago para poder completar tu
                    compra.
                  </span>
                </div>
              </div>

              <div className="col-12  py-4">
                <div className="col-12 py-2 d-flex justify-content-between">
                  <h6 className="payment_content-subtitle">Santander</h6>
                  <img src={imgSantander} alt="" className="px-5" />
                </div>
                <div className="col-12">
                  <span className="payment_content-description">
                    Una vez elijas los productos que vayas a comprar, comunícate
                    con nosotros por WhatsApp y te enviaremos el detalle con el
                    monto y el link a Genet para poder completar tu compra.
                    Además aprovecha los descuentos que te ofrecen por día al
                    pagar con este medio.
                  </span>
                </div>
              </div>

              <div className="col-12  py-4">
                <div className="col-12 py-2 d-flex justify-content-between">
                  <h6 className="payment_content-subtitle">Efectivo</h6>
                  <img src={imgEfectivo} alt="" className="px-5" />
                </div>
                <div className="col-12">
                  <span className="payment_content-description">
                    Podes pagar con efectivo al momento de retirar tu producto
                    con previa coordinación.
                  </span>
                </div>
              </div>

              <div className="col-12  py-4">
                <div className="col-12 py-2 d-flex justify-content-between">
                  <h6 className="payment_content-subtitle">Transferencia</h6>
                  <img src={imgTransferencia} alt="" className="px-5" />
                </div>
                <div className="col-12">
                  <span className="payment_content-description">
                    Una vez elijas los productos que vayas a comprar, comunícate
                    con nosotros por WhatsApp y te enviaremos el detalle con el
                    monto y los datos necesarios para que puedas completar tu
                    compra.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <div className="col-12 py-5 payment_section-doubts">
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
      <section className="payment_section-footer">
        <div className="circle"></div>
      </section>
    </>
  );
};

export default Payment;
