import { Card, CardHeader, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import { GeoAltFill, EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";

export default function Contact(){
    return(
    <section id='contact'>
        <h1>Contact Us</h1>
    <Container fluid className="sectionContent">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.616557387018!2d80.58068857489424!3d28.430824775775502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1e325f4605ec3%3A0x18cc102a324eaeb5!2sBATTH%20HOSPITAL!5e0!3m2!1sen!2sca!4v1708704273500!5m2!1sen!2sca" 
        width='100%'
        style={{"border":"0",'borderRadius':'2%','height':'40vh'}} 
        allowFullScreen="true" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Batth Hospital Google Maps"></iframe>
        <Row>
            <Col>
            <Card className="contactCard">
                <CardTitle as="h3"><GeoAltFill/></CardTitle>
                <CardSubtitle as="h5">Address</CardSubtitle>
                <CardText>Batth Hospital, Mall Godam Road, Palia Kalan, Lakhimpur Kheri, Uttar Pradesh 262902</CardText>
            </Card>
            </Col>
            <Col>
            <Card className="contactCard">
                <CardTitle as="h3"><EnvelopeFill/></CardTitle>
                <CardSubtitle as="h5">Email Us</CardSubtitle>
                <CardText>batth.clinic@gmail.com</CardText>
            </Card>
            </Col>
            <Col>
            <Card className="contactCard">
                <CardTitle as="h3"><TelephoneFill/></CardTitle>
                <CardSubtitle as="h5">Call Us</CardSubtitle>
                <CardText>
                    <p>123456</p>
                    <p>123456</p>
                </CardText>
            </Card>
            </Col>
        </Row>
        </Container>
    </section>
    );
}