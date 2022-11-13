import axios from "axios";
import React, { useEffect, useState } from "react";
import AboutIntro from "../../components/aboutPageCom/aboutIntro/AboutIntro";
import VisionMission from "../../components/aboutPageCom/visionMision/VisionMission";
import BreadcrumbMain from "../../components/breadCrumb/BreadCrumb";
import Loader from "../../components/loader/Loader";

function AboutUs() {
  const [introData, setIntroData] = useState([]);
  const [visionDat, setVisionDat] = useState([]);
  const [missionData, setMissionData] = useState([]);
  const catchData = async () => {
    const res = await axios.get(
      "https://myfarm.masool.net/eman-clinick/public/api/about"
    );
    const intro = res.data.data.first;
    setIntroData(intro);
    const mission = res.data.data.second;
    setMissionData(mission);
    const vision = res.data.data.third;
    setVisionDat(vision);
  };
  useEffect(() => {
    catchData();
  }, []);

  return (
    <div>
      <BreadcrumbMain
        pageName={"About Us"}
        data={[
          { name: "Home", link: "/" },
          { name: "AboutUs", link: "/aboutus" },
        ]}
      ></BreadcrumbMain>
      {introData.id ? (
        <>
          <AboutIntro introData={introData}></AboutIntro>
          <hr className="line1 mx-2" />
          <VisionMission
            visionData={visionDat}
            missionData={missionData}
          ></VisionMission>
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default AboutUs;
