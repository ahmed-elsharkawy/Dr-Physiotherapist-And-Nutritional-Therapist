import './whoWeAre.css'
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


function WhoWeAre() {
  const navigate = useNavigate()
  const handleAboutUsBut = () => {
    navigate('/aboutus')
  }
  return (
    <div className="whoWeAre my-5">
      <Container>
        <Row className=''>
          <Col md="8" className=''>
            <div className="leftSide">
              <p className="intro">Who we are</p>
              <h2 className='head'>
                Welcome to Physio Therapy <br></br> & Chiroparctor Clinic
              </h2>
              <p className='par1'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
              <p  className='par2'>
                sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit.
              </p>
              <p  className='par2'>
                sed quia non numquam qui ratione voluptatem sequi nesciunt.
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipiscil. sed quia non numquam qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam
              </p>
              <button className="btn mybtn shadow" onClick={handleAboutUsBut}>About Us</button>
            </div>
          </Col>
          <Col md="4" className="d-flex align-items-center justify-content-end">
            <div className="">
                <img src="https://img.freepik.com/free-vector/physiotherapy-concept-illustration_114360-7614.jpg" alt="" loading='lazy' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhoWeAre;
