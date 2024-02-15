import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

export default function Footer(){
    return (
        <>
        <Container fluid expand="sm">
        <Row className='text-bg-info'>
        <Col>Batth Hospital
        Mall Godam Road, Palia Kalan, Lakhimpur Kheri, Uttar Pradesh 262902
        <br/><span>Follow Us: <i class="bi bi-instagram"></i>
        {' '}<i class="bi bi-facebook"></i></span></Col>
        <Col><h3>Services</h3>

                <p>24/7 Emergency</p>
                <p>Cardiac</p>
                <p>Gynecology</p>
                <p>Diabetes</p>
                <p>Rheumatology</p>
        </Col>
        <Col><h3>Quick Links</h3>
                <p>Home</p>
                <p>About Us</p>
                <p>Doctors</p>
                <p>Book Appointment</p>
        </Col>
        <Col><h3>Contact Us</h3>
            <p><i class="bi bi-telephone-fill"></i>{' '}phone 1</p>
            <p><i class="bi bi-telephone-fill"></i>{' '}phone 2</p>
            <p><i class="bi bi-envelope-fill"></i>{' '}email</p>
        </Col>
      </Row>
        <div d-flex align-items-center><span>&copy;2024 Copyright Batth Hospital. All rights reserved</span></div>
        </Container>
        </>
    );
}