import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Doctor1 from '../assets/images/prerna.jpg';

const DOCTORS = [
  {
    title: 'Dr. Ravinder Pal Singh',
    image: 'image/ravinder.jpg',
    content: ['M.B.B.S., M.D.(Medicine)','AB Psychology','Ex Resident- RML Delhi, Max Hospital Delhi']
  },
  {
    title: 'Dr. Prerna',
    image: 'prerna.jpg',
    content: ['M.B.B.S.(OBG & Gynae)','Ex Resident- RML Delhi, GB Panth Hospital Delhi','Consultant (OBG & Gynae)']
  }
];

export default function Doctors(){
    return (
      <section id='doctors'>
        <h1>Doctors</h1>
        <Row xs={1} md={2} className="g-2 justify-content-center">
          {DOCTORS.map((item,index)=>(
            <Col className='doctor-column' key={index} >
              <Card onh>
              <Card.Img variant="center" className='align-center' src={item.image} style={{ 'width': '40%' ,'height':'70%','padding':'24px 24px 24px 24px'}}/>
            <Card.Body>
              <Card.Title style={{'fontWeight':'bolder'}}>{item.title}</Card.Title>
              <Card.Text style={{'opacity':'50%'}}>
                {item.content.map((list,index)=>(<li key={index}>{list}</li>))}
              </Card.Text>
            </Card.Body>
              </Card>
            </Col>
          ))}
    </Row>
    </section>
    );
}
