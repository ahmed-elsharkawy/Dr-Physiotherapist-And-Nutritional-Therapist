import './aboutIntro.css'
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AboutIntro({introData}) {
    const navigate = useNavigate()
    const handleContactBut = () => {
        navigate('/contactus')
    }
  return (
    <div className="aboutIntro my-5">
      <Container>
        <Row className=''>
        <Col md="4" className="d-flex align-items-center justify-content-end">
            <div className="">
                <img src={`https://img.freepik.com/free-vector/doctor-background-design_1270-62.jpg`} alt="" />
            </div>
          </Col>
          <Col md="8" className='mt-5'>
            <div className="leftSide">
              <h2 className='head my-4'>
                {introData.name}
              </h2>
              <p className='par1' dangerouslySetInnerHTML={{__html: introData.details}}></p>
              <button className="btn mybtn shadow mt-5" onClick={handleContactBut}>Contact Us</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutIntro;
