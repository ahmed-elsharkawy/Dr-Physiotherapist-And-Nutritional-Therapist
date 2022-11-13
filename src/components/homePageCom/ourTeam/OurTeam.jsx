import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./ourTeam.css";
import "swiper/css/bundle";
import axios from "axios";

function OurTeam() {
    const navigate = useNavigate()
    const [ teamsData, setTeamsData ] = useState([])
    const fetchData = async() => {
        const req =  await axios.get('https://myfarm.masool.net/eman-clinick/public/api/home')
        const data = req.data.data.teams
        setTeamsData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className="ourTeam py-5">
      <Container>
        <div className="intro">
          <h2 className="head py-3">Our Team</h2>
          <p className="par2">
            At Healing Chiropractic our chiropractic group is prepared to
            address with you to talk about your issues. We will outline a
            program that is appropriate for you. We anticipate meeting you..
          </p>
        </div>
        <div className="row my-4">
          {teamsData && teamsData.map((item, index) => {
            return(
                <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 my-3 d-flex justify-content-center">
            <div className="item">
              <Card style={{ width: "" }}>
                <Card.Img variant="top" src={`https://myfarm.masool.net/eman-clinick/public/uploads/${item.img}`} />
                <Card.Body className="text-center">
                  <Card.Title className="name"><span className="DR px-1">DR .</span>{item.name}</Card.Title>
                  <Card.Text className="par2">
                    {item.details}
                  </Card.Text>
                  <div className="social">
                {item.social && item.social.map((cur, index) => {
                    return(

                        <a key={index} href={`https://www.${cur.url_link}`} className={`icons border m-1 p-1 rounded shadow ${cur.name === 'whatsUp' && 'px-2'}`} dangerouslySetInnerHTML={{__html: cur.img}}></a>
                    )
                })}
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
            )
          })}
        </div>
      </Container>
    </div>
  );
}

export default OurTeam;
