import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import modalimg from "../../assets/img/advertisingimg.svg";
import logo from "../../assets/icon/roma-logo.svg";

const Advertising = () => {
  const [show, setShow] = useState(false);
  const [isSuscribe, setIsSuscribe] = useState(false);

  // para testear:
  //sessionStorage.removeItem("hasSeenModal");

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_rfj0nyn",
        "template_vle88oo",
        event.target,
        "T7D63srxE6X0p2-bi"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    event.target.reset();

    setIsSuscribe(true);
    sessionStorage.setItem("hasSeenModal", true);
  };

  const handleClose = () => setShow(false);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const hasSeenModal = sessionStorage.getItem("hasSeenModal");

      if (!hasSeenModal) {
        setShow(true);
        setIsSuscribe(false);
        sessionStorage.setItem("hasSeenModal", true);
      } else {
        setIsSuscribe(true);
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  //para que cambie el modal al suscribirse
  return (
    <>
      <Modal id="modal" show={show} onHide={handleClose}>
        <Modal.Header className="w-100" closeButton></Modal.Header>
        <div className="row">
          <div className="modal-col-left col-xs-12 col-md-4 col-lg-4">
            <img className="img-logo-mobile" src={logo} />
            <img src={modalimg} />
          </div>
          <div className="modal-col-right col-xs-12 col-md-8 col-lg-8">
            <img className="img-logo-mobile2" src={logo} />
            {isSuscribe ? (
              <p className="body1">
                ¡Gracias! Ya sos parte de la familia{" "}
                <strong>De Roma Deco.</strong>
              </p>
            ) : (
              <div className="d-flex flex-column align-items-center">
                <p className="body1">
                  Suscríbete a nuestro newsletter y recibe un{" "}
                  <b>10% de descuento</b> en tu primera compra{" "}
                </p>
                <form className="suscribe-form-modal" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-email"
                    required
                  />
                  <input
                    type="submit"
                    value="Suscribirme"
                    className="suscribe-button-modal"
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Advertising;
