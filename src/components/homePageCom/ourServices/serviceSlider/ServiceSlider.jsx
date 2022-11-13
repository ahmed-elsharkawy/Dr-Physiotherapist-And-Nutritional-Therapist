import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./serviceSlider.css";

// import required modules
import { Pagination } from "swiper";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ServiceSlider({serviceData}) {
  const vertiualImgs = [
    "https://img.freepik.com/free-vector/physiotherapy-concept-illustration_114360-7614.jpg",
    "https://img.freepik.com/free-vector/woman-with-injured-broken-leg-plaster-cast-sitting-doctor-office-taking-x-ray-crutch-vector-illustration-trauma-hospital-treatment-physiotherapy-concept_74855-10198.jpg",
  ];

  const navigate = useNavigate()
  const headleServicePage = () => {
    navigate('/service')
  }

  return (
    <div className="serviceSlider">
      <Container>
        <Row className="">
          {serviceData &&
            serviceData.map((item, index) => {
              return (
                <Col key={index} md="6" className="">
                  <div
                    className="item m-1 border"
                    style={{
                      backgroundImage: `url(https://myfarm.masool.net/eman-clinick/public/uploads/${item.img})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="overlay"></div>
                    <h3 className="bg-white border p-3 lead shadow" onClick={headleServicePage}>
                      {item.name}
                    </h3>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>

    </div>
  );
}
