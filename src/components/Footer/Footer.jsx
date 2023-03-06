import React from "react";
import { Link } from "react-router-dom";
import { InstagramIcon } from "../../assets/icon/instagram-icon";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-4">
            <h6>Navegacion</h6>
            <ul className="footer-links">
              <li>
                <Link to={"/"}>
                  <p>Inicio</p>
                </Link>
              </li>
              <li>
                <Link to={"/envios"}>
                  <p>Envíos</p>
                </Link>
              </li>
              <li>
                <Link to={"/medios_de_pago"}>
                  <p>Métodos de pago</p>
                </Link>
              </li>
              <li>
                <Link to={"/preguntas_frecuentes"}>
                  <p>Preguntas frecuentes</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-4">
            <h6>Contactanos</h6>
            <ul className="footer-links">
              <li>
                <p> +54 11 6184-5560 </p>
              </li>
              <li>
                <p>deromadeco@gmail.com </p>
              </li>
              <li>
                <p>Temperley, Argentina</p>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-4">
            <h6>Únete a la comunidad</h6>
            <a href="https://www.instagram.com/de.roma_deco/" target="_blank">
              <InstagramIcon stroke={"#474747"} fill={"#474747"} />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="#"> dERoma</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
