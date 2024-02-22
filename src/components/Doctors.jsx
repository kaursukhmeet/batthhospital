import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Doctor1 from '../assets/images/doctor1.png';

const DOCTORS = [
  {
    title: 'Doctor 1',
    image: '../assets/images/doctor1.png',
    content: 'Content for doctor 1',
  },
  {
    title: 'Doctor 2',
    image: '../assets/images/doctor1.png',
    content: `Content for doctor 2. This is a longer card with supporting text below as a natural
    lead-in to additional content. This content is a little bit
    longer.`,
  }
];

export default function Doctors(){
    return (
        <Row xs={1} md={2} className="g-2">
          {DOCTORS.map((item,index)=>(
            <Col key={index} style={{'padding':'24px 24px 24px 24px'}}>
              <Card style={{'height':'auto'}}>
              <Card.Img variant="center" className='align-center' src={Doctor1} style={{ 'width': '40%' ,'height':'40%','padding':'24px 24px 32px 24px'}}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.content}
              </Card.Text>
            </Card.Body>
              </Card>
            </Col>
          ))}
    </Row>
    );
}

  
    /*

    {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx} style={{'padding':'24px 24px 32px 24px'}}>
          <Card className='align-right' border="secondary" style={{'width':'100%'}}>
            <Card.Img variant="center" className='align-center' src={Doctor1} style={{ 'width': '40%' ,'height':'40%','padding':'24px 24px 32px 24px'}}/>
            <Card.Body>
              <Card.Title>Doctor Name</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      */