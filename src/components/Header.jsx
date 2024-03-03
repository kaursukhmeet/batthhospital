import '../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Logo from '../assets/images/logo.jpg';

export default function Header(){
  const [navIsOpen, setNavIsOpen] = React.useState(false);
  const navRef = React.useRef();

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      debugger;
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setNavIsOpen((open)=>!open);
  };

  
  return (
    <Navbar collapseOnSelect className="bg-body-tertiary" fixed='top' expand="lg" ref={navRef} expanded={navIsOpen} onToggle={toggleMenu}>
        <Container className='navigation'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="60"
              height="60"
              style={{'borderRadius':"50%"}}
              className="d-inline-block align-top"
            />{' '}
            <span >Batth Hospital</span>
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

