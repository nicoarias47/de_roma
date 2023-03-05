import React from "react";
import "../../views/style.css";
import wspIcon from "../../assets/icon/wsp-icon.svg";
import emailIcon from "../../assets/icon/email-icon.svg";

// Todo:
// Colocar urls a imgs

const Doubts = () => {
  return (
    <div className="doubts">
      <div className="row row-top">
        <h5>¿Quedaste con dudas?</h5>
      </div>
      <div className="row row-bottom background-doubts">
        <p className="body3">
          Estamos aquí para ti. Escríbenos a WhatsApp o envíanos un mail
        </p>
        <div className="social-doubts">
          <a
            href="https://www.whatsapp.com/catalog/5491161845560/"
            target="_blank"
          >
            <img src={wspIcon} alt="whatsapp" />
          </a>
          <a href="mailto:deromadeco@gmail.com" target="_blank">
            <img src={emailIcon} alt="mail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Doubts;
