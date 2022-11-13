import "./homeVideo.css";
import { useState, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PopupWindow from "../../pupupWindow/PopupWindow";
import OurVideo from "./ourVideo/OurVideo";
import { VideoContext } from "../../../contexts/VideoContext";

function HomeVideo() {
  const { videoState, toggleVideoState } = useContext(VideoContext)
  const handleOpenVideo = () => {
    toggleVideoState(true);
  };
  const navigate = useNavigate();
  const handleOffersBut = () => {
    navigate("/offers");
  };
  return (
    <div className="homeVideo my-2 py-5">
      <Container>
        <Row className="">
          <Col md="6">
            <div className="leftSide">
              <h2 className="head">
                How Can Chiropractic <br></br> Care Help You? We give you <br />
                Service to patients.
              </h2>
              <p>
                We plainly comprehend that you need not to lose, but rather to
                gain more cash over your time of work with us. That is the
                reason we dismiss all high-chance undertakings, that may prompt
                a quick heap of money out of the blue however to a primary
                capital's misfortune the second time.
              </p>
              <button
                className="btn mybtn2 mt-4 py-2 px-3"
                onClick={handleOffersBut}
              >
                View Offers
              </button>
            </div>
          </Col>
          <Col
            md="6"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="video border">
              <img
                src="https://www.miskawaanhealth.com/wp-content/uploads/2021/03/what-is-physiotherapy.jpg"
                alt=""
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i
                  className="fa-regular fa-circle-play text-white"
                  onClick={handleOpenVideo}
                ></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {videoState && (
        <PopupWindow
          childern={<OurVideo></OurVideo>}
        ></PopupWindow>
      )}
    </div>
  );
}

export default HomeVideo;
