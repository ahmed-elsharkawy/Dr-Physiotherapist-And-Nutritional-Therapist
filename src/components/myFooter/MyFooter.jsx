import "./myFooter.css";
import img from "../../assets/imgs/logo/logo-1.png";
import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <div className="myFooter py-4">
      <Container>
        <Row className="justify-content-between">
            <Col md="4" xs="12" className=''>
          <div className="info">
            <div className="logo">
              <img src={img} alt="Logo" />
            </div>
            <p className="mt-4 samllFonts">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium cumque exercitationem enim nihil voluptatibus
              dignissimos sunt expedita modi porro similique!
            </p>
          </div>
          </Col>
          <Col md="3" xs="6" className=''>
          <div className="links mt-2">
            <h3 className="my-4">Quick Links</h3>
            <ul className="contact samllFonts list-unstyled ">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">About Doctor</a></li>
              <li><a href="#">Offers</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          </Col>
          <Col md="3" xs="6" className=''>
          <div className="getInTouch mt-2">
            <h3 className="my-4">Get In Touch</h3>
            <div className="samllFonts">
              <p>01010101010</p>
              <p>aaaaaaa@aaaaaaa.com</p>
              <p>address aaaaaaaa</p>
              <div className="icons fs-5 d-flex align-items-center gap-3">
                <div className="facebook">
                  <i className="fa-brands fa-square-facebook"></i>
                </div>
                <div className="twitter">
                  <i className="fa-brands fa-square-twitter"></i>
                </div>
                <div className="whatsup">
                  <i className="fa-brands fa-square-whatsapp"></i>
                </div>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyFooter;
