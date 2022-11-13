import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext';

const  DropMenu = () => {
    const { handleLogin } = useContext(LoginContext)
    const handleLogout = () => {
        handleLogin(false, '')
    }
  return (
    <Dropdown className='mx-3'>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='mybtn'>
      <i className="fa-solid fa-user mx-"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
        <Dropdown.Item as={Link} to="/profile/program">Program</Dropdown.Item>
        <Dropdown.Item as={Link} to="/profile/training">Training</Dropdown.Item>
        <Dropdown.Item as={Link} to="/profile/daily">Daily</Dropdown.Item>
        <Dropdown.Item as={Link} to="/login" onClick={handleLogout}>LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropMenu;