import "./style.css";

const Footer = () => {
  return (

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>Sobre Roma</h6>
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum ea praesentium alias, ducimus porro nulla voluptatem repellendus sit tenetur.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="">Living</a></li>
              <li><a href="">Cocina</a></li>
              <li><a href="">Baño</a></li>
              <li><a href="">Habitacion</a></li>
              <li><a href="">Exterior</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Links Rapidos</h6>
            <ul class="footer-links">
              <li><a href="">Catalogo Whatsapp</a></li>
              <li><a href="">Home</a></li>
              <li><a href="">Productos</a></li>
              <li><a href="">Sobre Nosotras</a></li>
              <li><a href="">Contacto</a></li>
            </ul>
          </div>
        </div>
        {/* <hr> */}
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#"> dERoma</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="instagram" href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a class="whatsapp" href="#"><i class="fa fa-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
  );
};

export default Footer;
