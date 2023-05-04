import Carousel from 'react-bootstrap/Carousel';

function Carouselcomp() {
  return (
    <Carousel >
      <Carousel.Item style={{maxHeight:'30rem',height:'auto'}}>
        <img
          className="d-block w-100"
          src="assets/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>School Advertizing</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'30rem',height:'auto'}}>
        <img
          className="d-block w-100"
          src="assets/2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Coaching Advertizing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{maxHeight:'30rem',height:'auto'}}>
        <img
          className="d-block w-100"
          src="assets/3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>College Advertizing</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselcomp;