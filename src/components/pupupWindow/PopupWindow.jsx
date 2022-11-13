import { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { VideoContext } from '../../contexts/VideoContext';
import './popupWindow.css'

function PopupWindow(props) {
    const { toggleVideoState } = useContext(VideoContext)
    const [ openWindow, setOpenWindow ] = useState(true)
    const handleOpenWindow = () => {
        toggleVideoState(false)
        setOpenWindow(false)
    }

  return (
    <div className={openWindow ? 'popupWindow' : 'popupWindow d-none'} onClick={handleOpenWindow}>
      <Container>
      <div className="content border">
        {props.childern}
      </div>
      </Container>
    </div>
  );
}

export default PopupWindow;
