import './profileInfo.css'
import { ListGroup } from "react-bootstrap";

function ProfileInfo({profileData}) {
  return (
    <div className="profileInfo">
      <ListGroup className="">
        <ListGroup.Item className='outer'>User Information</ListGroup.Item>
        <ListGroup.Item><span className='barLeft'>Name</span><span className='barRight'>{profileData.name}</span></ListGroup.Item>
        <ListGroup.Item><span className='barLeft'>Age</span><span className='barRight'>28</span></ListGroup.Item>
        <ListGroup.Item><span className='barLeft'>Gender</span><span className='barRight'>{profileData.sex === "A" ? "Male" : "Femail"}</span></ListGroup.Item>
        <ListGroup.Item><span className='barLeft'>First Weight</span><span className='barRight'> {profileData.weight} KG</span></ListGroup.Item>
        <ListGroup.Item><span className='barLeft'>Current Weight</span><span className='barRight'>80 KG</span></ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ProfileInfo;
