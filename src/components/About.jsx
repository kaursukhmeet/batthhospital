import Figure from '../assets/images/stethoscope.png';
import { Col, Container, Row } from 'react-bootstrap';

export default function About(){
    return(
      <section id='about'>
      <h1>Welcome to Batth Hospital</h1>
      <Container fluid>
      <Row style={{}}>
        <Col></Col>
        <Col><img src={Figure} alt='Batth Hospital'

        style={{height:'50vh','borderTopLeftRadius':'50%','borderTopRightRadius':'50%','float':'right',
      'boxShadow':'0 0 80px white inset'}}
        /></Col>
      </Row>
      </Container>
    </section>
    );
}
