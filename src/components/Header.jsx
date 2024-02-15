import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Logo from '../logo.svg';

export default function Header(){
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
        <Container className='navigation'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            <span style={{"display":"inline-block","fontSize":"40px","align" : "bottom"}}>Batth Hospital</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" activeKey="/home" style={{ 'fontSize': '18px' }}>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Doctors</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Contact Us</Nav.Link>
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

