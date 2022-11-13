import { Button } from "react-bootstrap";
import React from "react";
import { Container, Form } from "react-bootstrap";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Container>
        <div className="item my-5">
          <div className="row border rounded justify-content-between">
            <div className="col-md-7 p-5">
              <Form className="form">   
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number" placeholder="Enter your phone" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your Address" />
                </Form.Group>
                <Button type="submit" className="mybtn">
                  Submit
                </Button>
              </Form>
            </div>
            <div className="con col-md-4 p-5">
              <div className="text-start">
                <h3 className="head my-4">Get in touch with us</h3>
                <hr className="contact-Line" />
                <div className="conData">
                  <p className="pt-3"><span>Phone : </span> 01010101010</p>
                  <p>Email : aaaaaaa@aaaaaaa.com</p>
                  <p>address : aaaaaaaa</p>
                  <div className="icons fs-5 d-flex align-items-center gap-4 mt-5">
                    <div className="facebook ">
                      <i className="fa-brands fa-square-facebook rounded"></i>
                    </div>
                    <div className="twitter">
                      <i className="fa-brands fa-square-twitter rounded"></i>
                    </div>
                    <div className="whatsup">
                      <i className="fa-brands fa-square-whatsapp rounded"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
