import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeVideo from "../../components/homePageCom/homeVideo/HomeVideo";
import IntroSlider from "../../components/homePageCom/introSlider/IntroSlider";
import OurServices from "../../components/homePageCom/ourServices/OurServices";
import OurTeam from "../../components/homePageCom/ourTeam/OurTeam";
import SuccessStories from "../../components/homePageCom/successStories/SuccessStories";
import WhoWeAre from "../../components/homePageCom/whoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/homePageCom/whyChooseUs/WhyChooseUs";

function Home() {
  const [sliderData, setSliderData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  const fetchData = async () => {
    axios
      .get("https://myfarm.masool.net/eman-clinick/public/api/home")
      .then((res) => {
        const slider = res.data.data.slider;
        setSliderData(slider);

        const service = res.data.data.services;
        setServiceData(service);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <IntroSlider sliderData={sliderData}></IntroSlider>
      <WhoWeAre></WhoWeAre>
      <WhyChooseUs></WhyChooseUs>
      <OurServices serviceData={serviceData}></OurServices>
      <HomeVideo></HomeVideo>
      <OurTeam></OurTeam>
      <SuccessStories></SuccessStories>
    </div>
  );
}

export default Home;
