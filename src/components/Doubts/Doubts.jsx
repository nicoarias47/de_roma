import React from "react";
import "../../views/style.css"
import wspIcon from "../../assets/icon/wsp-icon.svg";
import emailIcon from "../../assets/icon/email-icon.svg";

// Todo:
// Colocar urls a imgs

const Doubts = () => {
  return (
    <div className="doubts">
      <div className="row row-top">
        <h5>¿Quedaste <br/>con dudas?</h5>
      </div>
      <div className="row row-bottom background-doubts">
          <p className="body3">
            Estamos aquí para ti. Escríbenos a WhatsApp o envíanos un mail
          </p>
          <div className="social-doubts">
            <img src={wspIcon} alt="whatsapp" />
            <img src={emailIcon} alt="mail" />
          </div>
      </div>
    </div>
  );
};

export default Doubts;
