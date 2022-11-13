import React from 'react'
import { Container } from 'react-bootstrap'
import './visionMission.css'

function VisionMission({visionData, missionData}) {
  return (
    <div className='visionMision my-5'>
        <Container>
            <div className="row">
                <div className="col-lg-6">
                    <div className="item m-2 border rounded text-center d-flex flex-column justify-content-between p-3">
                        <div className="content pt-3 px-3">
                            <h2 className='head py-3'>{visionData.name}</h2>
                            <p dangerouslySetInnerHTML={{__html: visionData.details}}></p>
                        </div>
                        <div className="img w-100 text-end"><img src="https://bpanational.wpenginepowered.com/wp-content/uploads/2019/01/target-mission-vision-icon-RED-BLUE.svg" alt="" /></div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="item m-2 border rounded text-center d-flex flex-column justify-content-between p-3">
                        <div className="content pt-3 px-3">
                            <h2 className='head py-3'>{missionData.name}</h2>
                            <p dangerouslySetInnerHTML={{__html: missionData.details}}></p>
                        </div>
                        <div className="img w-100 text-end"><img src="https://freepngimg.com/thumb/bulb/30535-2-idea-bulb-clipart.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default VisionMission