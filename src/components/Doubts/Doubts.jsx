import React from "react";
import wspIcon from "../../assets/icon/wsp-icon.svg";
import emailIcon from "../../assets/icon/email-icon.svg";

// Todo:
// Colocar urls a imgs

const Doubts = () => {
  return (
    <div className="doubts">
      <div className="row doubts-content">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2>¿Quedaste con dudas?</h2>
          <span>Escribínos al Whatsapp o envianos un mail</span>
          <div className="row">
            <div className="col doubts-content_social_media py-4 d-flex gap-4 align-items-center justify-content-center">
              <img src={wspIcon} alt="whatsapp" />
              <img src={emailIcon} alt="mail" />
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Doubts;

// anterior (waves)
{
  /* <div className="doubts">
      <div className="doubts-wave_one"></div>
      <div className="row doubts-content">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h2>¿Quedaste con dudas?</h2>
          <span>Escribínos al Whatsapp o envianos un mail</span>
          <div className="row">
            <div className="col doubts-content_social_media py-4 d-flex gap-4 align-items-center justify-content-center">
              <img src={wspIcon} alt="whatsapp" />
              <img src={emailIcon} alt="mail" />
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="doubts-wave_two"></div>
    </div> */
}
