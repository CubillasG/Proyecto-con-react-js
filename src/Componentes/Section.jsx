import React from 'react'
import Row  from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Logo from '../assets/imagen.png'
import { Link } from 'react-router-dom';
import {Nav, Navbar,NavDropdown, Container} from 'react-bootstrap'
import estilo from '../Componentes/Estilo.css'

const Section = () => {
  return (

    <>
    <Row>
   <Col>
      <Card.Img variant="top" src={Logo} className='Estilo' />
   </Col>
 

  <Col>
      <Card >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          DIGIIZE YOUR BUSINESS NOW AND REACH NEW CUSTOMERS THROUGH THE INTERNET
        </Card.Text>
        <Nav.Link as={Link} to='about'>
        <Button variant="primary">START NOW</Button>
        </Nav.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row> 
 </>
  )
}

export default Section
