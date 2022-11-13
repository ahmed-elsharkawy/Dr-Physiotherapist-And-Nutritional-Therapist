import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./successStories.css";

// import required modules
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
  Scrollbar,
  EffectCreative,
} from "swiper";
import axios from "axios";
import { Container } from "react-bootstrap";

export default function SuccessStories() {
  const [successData, setSuccessData] = useState([]);
  const virtualAvatar =
    "https://www.statnews.com/wp-content/uploads/2021/02/nick-f-profile-1024x1024.png";
    const virtualAvatar1 = 'https://img.pikbest.com/png-images/20190830/happy-girl-losing-weight-successfully_2526279.png'
  const catchData = async () => {
    const res = await axios.get(
      "https://myfarm.masool.net/eman-clinick/public/api/home"
    );
    const data = res.data.data.success;
    setSuccessData(data);
  };
  useEffect(() => {
    catchData();
  }, []);

  return (
    <>
      <Swiper
        autoplay={{
          delay: 350000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        scrollbar={true}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        navigation={true}
        modules={[
          Autoplay,
          EffectFade,
          EffectCreative,
          Scrollbar,
          Pagination,
          Navigation,
        ]}
        className="successSwiper"
      >
        {successData.map((item, index) => {
          return (
            <SwiperSlide key={index} className="d-flex align-items-center">
              <Container className="contain">
                <div className="row w-100 h-100 align-items-center justify-content-between">
                  <div className="borderRight col-md-6 d-flex align-items-center">
                    <div className="content w-100">
                      <div className="info d-flex justify-content-center">
                        <div className="img rounded">
                          <img
                            className="img-fluid"
                            src={
                              item.name === "Inga Wallace"
                                ? virtualAvatar
                                : `https://myfarm.masool.net/eman-clinick/public/uploads/${item.img}`
                            }
                            alt=""
                          ></img>
                        </div>
                      </div>
                      <div className="text ">
                        <div className="name">
                          <h2 className="head my-3 text-center">{item.name}</h2>
                        </div>
                        <p className="par1 w-75 m-auto text-center">
                          adipisicing Lorem ipsum dolor sit amet consectetur
                          elit. Saepe, nemo! ipsum dolor sit amet consectetur
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="secondPart col-md-6 d-flex h-75 justify-content-end ">
                    <div className="compareImg w-75 h-50 py-4">
                      <img
                        className="successImage"
                        src={
                          item.name === "Inga Wallace"
                            ? virtualAvatar1
                            : `https://myfarm.masool.net/eman-clinick/public/uploads/${item.img_thumbnail}`
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
