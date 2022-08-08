import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter,Route, Routes, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>Productos</Nav.Link>
            <Nav.Link as={Link} to='/contactos'>Contactos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
       
     
     
      
        
    </>
  )
}

export default NavBar
