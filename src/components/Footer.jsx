import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

export default function Footer(){
    return (
        <Container fluid>
        <Row style={{'textAlign':'center', 'backgroundColor':'var(--global-color)','padding':'24px 14px 24px 14px'}}> 
            <Col>
                &copy;2024 Copyright <b>Batth Hospital</b>. All rights reserved
            </Col>
            <Col>
                <i className="bi bi-instagram"></i>{' '}<i className="bi bi-facebook"></i>
            </Col>
        </Row>
        </Container>
    );
}
/*
<Container fluid expand="sm" style={{"padding":"30px"}}>
    
</Container>
*/
/*<Row className='text-bg-info'>
        <Col>Batth Hospital
        Mall Godam Road, Palia Kalan, Lakhimpur Kheri, Uttar Pradesh 262902
        <br/><span>Follow Us: <i className="bi bi-instagram"></i>
        {' '}<i className="bi bi-facebook"></i></span></Col>
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
            <p><i className="bi bi-telephone-fill"></i>{' '}phone 1</p>
            <p><i className="bi bi-telephone-fill"></i>{' '}phone 2</p>
            <p><i className="bi bi-envelope-fill"></i>{' '}batth.clinic@gmail.com</p>
        </Col>
      </Row>*/