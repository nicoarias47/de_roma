const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-12 col-md-6">
            <h6>Sobre Roma</h6>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              dolorum ea praesentium alias, ducimus porro nulla voluptatem
              repellendus sit tenetur.
            </p>
          </div> */}
          <div className="col-xs-6 col-md-3">
            <h6>Navegacion</h6>
            <ul className="footer-links">
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Ver productos</a>
              </li>
              <li>
                <a href="">Envíos</a>
              </li>
              <li>
                <a href="">Métodos de pago</a>
              </li>
              <li>
                <a href="">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Contactanos</h6>
            <ul className="footer-links">
              <li>
                <a href="">+54 11 6184-5560</a>
              </li>
              <li>
                <a href="">deromadeco@gmail.com</a>
              </li>
              <li>
                <a href="">Temperley, Argentina</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Únete a la comunidad</h6>
          </div>
        </div>
        {/* <hr> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="#"> dERoma</a>.
            </p>
          </div>
          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="whatsapp" href="#">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
