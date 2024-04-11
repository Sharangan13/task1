import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo3.png";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand><img src={logo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end gap-lg-5 '>
        <Nav className='nav-custom gap-0 gap-lg-5'>
          <Nav.Link ><Link to="home" spy={true} smooth={true} offset={0} duration={300}>Home</Link></Nav.Link>
          <Nav.Link ><Link to="whoisandromeda" spy={true} smooth={true} offset={0} duration={300}>Who is Andromeda?</Link></Nav.Link>
          <Nav.Link ><Link to="features" spy={true} smooth={true} offset={0} duration={300}>Features</Link></Nav.Link>    
          <Nav.Link href="roadmap"> RoadMap</Nav.Link>
          <Nav.Link ><Link to="contactus" spy={true} smooth={true} offset={0} duration={300}>Contact Us</Link></Nav.Link>
          
        </Nav>

        <div>
          <button className="btn-signup whitespace-nowrap">Sign Up</button>
          <button className="btn-login">Login</button>
        </div>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
