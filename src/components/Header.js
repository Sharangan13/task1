import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo3.png";

export default function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand><img src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end gap-lg-5 '>
          <Nav className='nav-custom gap-0 gap-lg-5'>
            <NavLink exact className="nav-link" to="/home">Home</NavLink>
            <NavLink  className="nav-link" to="/whoisandromeda">Who is Andromeda?</NavLink>
            <NavLink  className="nav-link" to="/features">Features</NavLink>
            <NavLink  className="nav-link" to="/roadmap">RoadMap</NavLink>
            <NavLink  className="nav-link" to="/contactus">Contact Us</NavLink>
          </Nav>

          <div>
            <button className="btn-signup whitespace-nowrap">Sign Up</button>
            <button className="btn-login">Login</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
