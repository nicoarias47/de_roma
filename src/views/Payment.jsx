import React from "react";
import "./style.css";
import Doubts from "../components/Doubts/Doubts";
import paymentimg1 from "../assets/img/paymentimg1.svg";
import mercadopago from "../assets/icon/mercadopago.svg";
import getnet from "../assets/icon/getnet.svg";
import efectivo from "../assets/icon/efectivo.svg";
import transferencia from "../assets/icon/transferencia.svg";
<<<<<<< HEAD
import circlepaymentimg from "../assets/img/circlepaymentimg.svg";
import { Container } from "react-bootstrap";
const Payment = () => {
  return (
    <>
    <Container fluid="lg">
      <div className="payment-container">
        <div className="row">
          <div className="col-left col-xs-12 col-md-6 col-lg-6 p-3">
            <div className="background-left">
              <img className="payment-img" src={paymentimg1} />
              <div className="payment-rectangule">
                <h5> Medios de Pago </h5>
=======
import { Container } from "react-bootstrap";

const Payment = () => {
  return (
    <>
      <Container>
        <div className="payment-container">
          <div className="row">
            <div className="col-left col-xs-12 col-md-6 col-lg-6 p-3">
              <div className="background-left">
                <img className="payment-img" src={paymentimg1} />
                <div className="payment-rectangule">
                  <h5> Medios de Pago </h5>
                </div>
>>>>>>> ec8beff0b02641e09db959f52068e01b897f00a4
              </div>
            </div>
            <div className="col-right col-xs-12 col-md-6 col-lg-6 p-3">
              <p className="body2">
                Estos son los medios de pago que te ofrecemos
              </p>

              <div className="sub-col-container">
                <div className="sub-col-header col-12">
                  <p className="body2-title">Mercado Pago</p>
                  <img className="paymenticon" src={mercadopago} />
                </div>
                <p className="col-12 body3">
                  Una vez elijas los productos que vayas a comprar, comunícate
                  con nosotros por WhatsApp y te enviaremos el detalle con el
                  monto y el link a Mercado Pago para poder completar tu compra.{" "}
                </p>
              </div>
              <div className="sub-col-container">
                <div className="sub-col-header col-12">
                  <p className="body2-title"> Santander </p>
                  <img className="paymenticon" src={getnet} />
                </div>
                <p className="body3">
                  Una vez elijas los productos que vayas a comprar, comunícate
                  con nosotros por WhatsApp y te enviaremos el detalle con el
                  monto y el link a Genet para poder completar tu compra.
                  <br />
                  Aprovecha los descuentos que te ofrecen por día al pagar con
                  este medio.
                </p>
              </div>
              <div className="sub-col-container">
                <div className="sub-col-header col-12">
                  <p className="body2-title"> Efectivo </p>
                  <img className="paymenticon" src={efectivo} />
                </div>
                <p className="body3">
                  Podes pagar con efectivo al momento de retirar tu producto con
                  previa coordinación.
                </p>
              </div>
              <div className="sub-col-container">
                <div className="sub-col-header col-12">
                  <p className="body2-title"> Transferencia </p>
                  <img className="paymenticon" src={transferencia} />
                </div>
                <p className="body3">
                  Una vez elijas los productos que vayas a comprar, comunícate
                  con nosotros por WhatsApp y te enviaremos el detalle con el
                  monto y los datos necesarios para que puedas completar tu
                  compra.
                </p>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      <Doubts />

      <div className="circle-container">
        <div className="bg-circle-payment"></div>
        <img className="circle-payment-img" src={circlepaymentimg}></img>
      </div>
      </Container>
      <section className="shipping-footer">
        <figure className="circle"></figure>
=======
        <Doubts />
      </Container>
      <section className="payment_section-footer">
        <div className="circle"></div>
>>>>>>> ec8beff0b02641e09db959f52068e01b897f00a4
        <div className="img"></div>
      </section>
    </>
  );
};

export default Payment;
