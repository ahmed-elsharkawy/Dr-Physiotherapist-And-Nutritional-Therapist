import "./introContacts.css";
import React from "react";
import { Container } from "react-bootstrap";

function IntroContacts() {
  return (
    <div className="introContacts p-2">
      <Container className="d-flex justify-content-between">
        <div className="leftSide d-flex justify-content-center align-items-center gap-4">
          <div className="phone">
            <i className="fa-solid fa-phone mx-3"></i>
            0101475896
          </div>
          <div className="email">
            <i className="fa-solid fa-envelope mx-3"></i>
            aaaaaa@aaaaaaa.com
          </div>
        </div>

        <div className="rightSide fs-5 d-flex justify-content-center align-items-center gap-3">
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
      </Container>
    </div>
  );
}

export default IntroContacts;
