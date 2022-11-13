import { Container } from 'react-bootstrap';
import './ourServices.css'
import "swiper/css/bundle";
import "./serviceSlider/serviceSlider.css";
import ServiceSlider from './serviceSlider/ServiceSlider';

function OurServices({serviceData}) {
  return (
    <div className="ourServices py-5">
        <Container>
      <div className="intro">
        <h2 className='head py-3'>Our Services</h2>
        <p className='par2'>
          At Healing Chiropractic our chiropractic group is prepared to address
          with you to talk about your issues. We will outline a program that is
          appropriate for you. We anticipate meeting you..
        </p>
      </div>
      <div className="my-5">
        <ServiceSlider serviceData={serviceData}></ServiceSlider>
      </div>
      </Container>
    </div>
  );
}

export default OurServices;
