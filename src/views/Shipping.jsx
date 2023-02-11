import React from "react";
import Doubts from "../components/Doubts/Doubts";
import circlepaymentimg3 from "../assets/img/circlepaymentimg3.svg";
import paymentimg3 from "../assets/img/paymentimg3.svg";
const Shipping = () => {
  return (
    <>
    <div className="payment-container">
      <div className="row">
        <div className="col-left col-xs-12 col-md-6 col-lg-6 p-3">
          <div className="background-left">
            <img className="payment-img" src={paymentimg3} />
            <div className="payment-rectangule">
              <h5> Envíos </h5>
            </div>
          </div>
        </div>

        <div className="col-right col-xs-12 col-md-6 col-lg-6 p-3">
          <p className="body2">
          Realizamos envíos a nivel nacional por medio de Correo Argentino
          </p>

          <div className="sub-col-container">
            <div className="sub-col-header col-12">
              <p className="body2-title">¿Cuánto tarda en llegar mi pedido? </p>
            </div>
            <p className="col-12 body3">
            Nos toma entre 48 y 72 horas en despachar tu pedido a la empresa de correo.
<br/>
El tiempo de llegada, depende de la compañía de correo y de tu ubicación.
            </p>
          </div>
          <div className="sub-col-container">
            <div className="sub-col-header col-12">
              <p className="body2-title"> Seguimiento de los pedidos  </p>
            </div>
            <p className="body3">
            Al momento en el que tu pedido este en manos de la empresa de envíos se te entregara un numero de guía para que puedas hacerle seguimiento a tu pedido y puedas estar pendiente de su llegada.
            </p>
          </div>
          <div className="sub-col-container">
            <div className="sub-col-header col-12">
              <p className="body2-title"> Envíos exprés </p>
            </div>
            <p className="body3">
            No realizamos pedidos expres ya que dependemos de los tiempos de entrega de las compañía. 
            </p>
          </div>
          <div className="sub-col-container">
            <p className="body3"> 
            Si deseas saber más sobre los costos de despacho clickea en el siguiente enlace.
            </p>
            <br/>
            <a href="#">Ver costos de despacho</a>
          </div>
        </div>
      </div>
    </div>

    <Doubts />

    <div className="circle-container">
      <div className="bg-circle-payment"></div>
      <img className="circle-payment-img ajustawidthtemp" src={circlepaymentimg3}></img>
    </div>
  </>
  );
};

export default Shipping;
