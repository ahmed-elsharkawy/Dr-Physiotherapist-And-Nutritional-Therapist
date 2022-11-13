import "./myNav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from "../../assets/imgs/logo/logo-1.png";
import { Button, NavbarBrand, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropMenu from "../profileDropMenu/DropMenu";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

function MyNav() {
  const { loginState } = useContext(LoginContext);
  return (
    <>
      <Navbar expand="lg" className="navbar" variant="dark">
        <Container>
          <Navbar.Brand className="navBrand" as={Link} to="/">
            <img className="logoImg" src={img} alt="Logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="ml-auto nav d-flex justify-content-end align-items-center w-100">
              <NavLink as={Link} className="link" to="/home">
                Home
              </NavLink>
              <NavLink as={Link} to="aboutus">
                About Us
              </NavLink>
              <NavLink as={Link} to="service">
                Service
              </NavLink>
              <NavLink as={Link} to="offers">
                Offers
              </NavLink>
              <NavLink as={Link} to="contactus">
                Contact Us
              </NavLink>
              {loginState ? (
                <DropMenu></DropMenu>
              ) : (
                <NavLink as={Link} to="login">
                  <Button className="mybtn">Login</Button>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
