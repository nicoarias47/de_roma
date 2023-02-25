import React from "react";
import Doubts from "../components/Doubts/Doubts";
import { Container } from "react-bootstrap";
import imgMp from "../assets/icon/mercadopago.svg";
import imgEfectivo from "../assets/icon/efectivo.svg";
import imgSantander from "../assets/icon/santander.svg";
import imgTransferencia from "../assets/icon/transferencia.svg";

const Shipping = () => {
  return (
    <>
      <Container fluid="lg" className="shipping_section">
        <div className="row shipping_section-grid">
          <section className="col-12 shipping_section-hero">
            <div className="shipping_section-img"></div>
            <div className="row d-flex justify-content-center shipping_section-description ">
              <h5 className="col-8 shipping_section-title ">Envios</h5>
            </div>
          </section>
          <section className="col-12 shipping_section-content ">
            <h6 className="shipping_content-title">
              Realizamos envíos a nivel nacional por medio de Correo Argentino
            </h6>

            <div className="row shipping_content">
              <div className="col-12 py-4">
                <div className="col-12 py-2 d-flex justify-content-between">
                  <h6 className="shipping_content-subtitle">Mercado Pago</h6>
                  <img src={imgMp} alt="" className="px-5" />
                </div>
                <div className="col-12">
                  <span>
                    Una vez elijas los productos que vayas a comprar, comunícate
                    con nosotros por WhatsApp y te enviaremos el detalle con el
                    monto y el link a Mercado Pago para poder completar tu
                    compra.
                  </span>
                </div>
              </div>

              <div className="col-12  py-4">
                <div className="col-12 py-2 d-flex justify-content-between">
                  <h6 className="shipping_content-subtitle">Santander</h6>
                  <img src={imgSantander} alt="" className="px-5" />
                </div>
                <div className="col-12">
                  <span>
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
                  <h6 className="shipping_content-subtitle">Efectivo</h6>
                  <img src={imgEfectivo} alt="" className="px-5" />
                </div>
                <div className="col-12">
                  <span>
                    Podes pagar con efectivo al momento de retirar tu producto
                    con previa coordinación.
                  </span>
                </div>
              </div>

              <div className="col-12  py-4">
                <div className="col-12 py-2 d-flex justify-content-between">
                  <h6 className="shipping_content-subtitle">Transferencia</h6>
                  <img src={imgTransferencia} alt="" className="px-5" />
                </div>
                <div className="col-12">
                  <span>
                    Una vez elijas los productos que vayas a comprar, comunícate
                    con nosotros por WhatsApp y te enviaremos el detalle con el
                    monto y los datos necesarios para que puedas completar tu
                    compra.
                  </span>
                </div>
              </div>
            </div>
          </section>
          <div className="col-12 py-5 shipping_section-doubts">
            <div className="row">
              <div className="col"></div>
              <div className="col-sm-12 col-md-12">
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
