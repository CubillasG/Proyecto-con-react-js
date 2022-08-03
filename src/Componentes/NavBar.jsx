import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar,NavDropdown, Container} from 'react-bootstrap'
import Logo from '../assets/logoLarge.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
      <Navbar fixed="top" />
        <Container >
          <Navbar.Brand href="#home">
            <img src={Logo} width='100px'></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio" as={Link} to='/'>Digitize NOW</Nav.Link>
            <Nav.Link href="#informacio" as={Link} to='/informacion'>About</Nav.Link>
            <Nav.Link href="#contactos" as={Link} to='/contactos'>Contactos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        
    </>
  )
}

export default NavBar
