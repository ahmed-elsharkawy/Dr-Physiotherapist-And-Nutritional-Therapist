import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./whyChooseUs.css";

function WhyChooseUs() {
  const navigate = useNavigate()
  const handleAboutDocBut = () => {
    navigate('/aboutus')
  }
  return (
    <div className="whyChooseUs pt-5">
      <Row>
        <Col className="img" lg='6'>
          <div>
            <img
              src="https://gmcclinics.com/wp-content/uploads/2019/04/how-physiotherapy-can-treat-back-pain.jpg"
              alt=""
              loading="lazy"
            />
            <div className="overlay"></div>
          </div>
        </Col>
        <Col className="data p-5 text-white" lg='6'>
          <div className="all">
            <h2 className="intro">Why Choose Us</h2>
            <p>
              We Proudly give quality, thorough chiropractic to the group and
              the encompassing regions.
            </p>
            <p>
              Chiropractic mind is the act of utilizing spinal arrangement to
              ease a wide assortment of physical infirmities, including muscle
              strain, neck torment, endless back torment, and then some.
            </p>
            <p>
              Chiropractic mind is the act of utilizing spinal arrangement to
              ease a wide assortment of physical infirmities.
            </p>
            <button className="btn mybtn3 mt-4 py-2 px-3" onClick={handleAboutDocBut}>About Doctor</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default WhyChooseUs;
