import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import Photo1 from "../../assets/img/photo1.jpg";
import Photo2 from "../../assets/img/photo2.jpg";
import Photo3 from "../../assets/img/photo3.jpg";

function MainCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="CarouselPhoto" src={Photo1} alt="First slide" />
        <Carousel.Caption>
          <div className="container-btn">
            <button className="see-more" href="">
              Ver Mas
            </button>
          </div>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="CarouselPhoto" src={Photo2} alt="Second slide" />

        <Carousel.Caption>
          <div className="container-btn">
            <button className="see-more" href="">
              Ver Mas
            </button>
          </div>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="CarouselPhoto" src={Photo3} alt="Third slide" />

        <Carousel.Caption>
          <div className="container-btn">
            <button className="see-more" href="">
              Ver Mas
            </button>
          </div>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
