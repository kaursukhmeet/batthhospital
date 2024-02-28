import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Logo from '../assets/images/logo.jpg';

export default function Header(){
  return (
    <Navbar className="bg-body-tertiary" expand="lg" style={{'position':'fixed', 'zIndex':'9999','width':'100%','top':'0','height':'80px'}}>
        <Container className='navigation'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="60"
              height="60"
              style={{'border-radius':"50%"}}
              className="d-inline-block align-top"
            />{' '}
            <span style={{"display":"inline-block","fontSize":"40px","align" : "bottom"}}>Batth Hospital</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" activeKey="/home" style={{ 'fontSize': '18px' }}>
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#doctors">Doctors</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav.Item>
        {/*<Nav.Item>
          <Button href="#">Book Appointment</Button>
  </Nav.Item>*/}
      </Nav>
      </Navbar.Collapse>
        </Container>
      </Navbar>
  );




}

