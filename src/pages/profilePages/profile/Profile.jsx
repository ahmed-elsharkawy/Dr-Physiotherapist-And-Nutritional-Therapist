import './profile.css'
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BreadcrumbMain from "../../../components/breadCrumb/BreadCrumb";
import InbodyTable from "../../../components/profilePageCom/inbodyTable/InbodyTable";
import ProfileInfo from "../../../components/profilePageCom/profileInfo/ProfileInfo";
import { LoginContext } from "../../../contexts/LoginContext";

function Profile() {
  const [profileData, setProfileData] = useState({});
  const { token } = useContext(LoginContext);
  const catchData = async () => {
    const res = await axios.get(
      "https://myfarm.masool.net/eman-clinick/public/api/profile",
      {
        methode: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setProfileData(res.data.data);
  };

  useEffect(() => {
    catchData();
  }, []);
  console.log(token)
  return (
    <>
      <BreadcrumbMain
        pageName={"Profile"}
        data={[
          { name: "Home", link: "/" },
          { name: "Profile", link: "/profile" },
        ]}
      ></BreadcrumbMain>
      <div className="profileData py-5">
        <div className="overlay"></div>
        <Container>
          <div className="row justify-content-between">
          <h1 className='welcome text-center text-white my-5 pb-5'><span className='border p-3 rounded'><span className='wel'>Welcome</span> <span className='name'>{profileData.name}</span></span></h1>
            <div className="col-md-4">
              <div className="userInfo">
                <ProfileInfo profileData={profileData}></ProfileInfo>
              </div>
            </div>
            <div className="col-md-7 border rounded p-3 userInbody">
          <h2 className='head text-center py-4'>Inbody Analysis</h2>
              <InbodyTable profileData={profileData.analysis}></InbodyTable>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Profile;
