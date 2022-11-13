import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./introSlider.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function IntroSlider({sliderData}) {

  const navigate = useNavigate();
  const handleContactusBut = () => {
    navigate("/contactus");
  };
  const createMarkup = (data, type) => {
    
    const d = data.split('</p>')
    return { __html: d[type] };
  }

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 400000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="introSwiper"
      >
        {sliderData.map((item, index) => {
          return (
            <SwiperSlide key={index} className="d-flex align-items-center">
              <Container className="contain d-flex justify-contnet-between align-items-center ">
                <div className="content w-100 px-5 text-start">
                    {/* <h1 className="my-0 p-4" dangerouslySetInnerHTML={createMarkup(item.details, 0)} ></h1>
                    <h2 className="my-0 pt-3 pb-2 px-3"  dangerouslySetInnerHTML={createMarkup(item.details, 1)}></h2>
                    <p className="par1 my-4"  dangerouslySetInnerHTML={createMarkup(item.details, 2)}></p>
                     */}
                    <button
                      className="btn px-3 py-2"
                      onClick={handleContactusBut}
                    >
                      contact us
                    </button>
                </div>
                <div className="img w-100">
                  <img
                    className="img-fluid"
                    src={`https://myfarm.masool.net/eman-clinick/public/uploads/${item.img}`}
                    alt=""
                  />
                  <div className="overlay"></div>
                </div>
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
