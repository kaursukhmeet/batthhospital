import { Accordion } from "react-bootstrap";

const SERVICES = [
        {
          title: 'Item 1',
          content: 'Content for item 1',
        },
        {
          title: 'Item 2',
          content: 'Content for item 2',
        },
        {
          title: 'Item 3',
          content: 'Content for item 3',
        }
];


export default function Services(){
    
    return(<section id='services'>
      <h1>Our Services</h1>
        <Accordion className="sectionContent">
        {SERVICES.map((item, index) => (
        <Accordion.Item key={index} eventKey={index}>
          <Accordion.Header>
            {item.title}
          </Accordion.Header>
          <Accordion.Body> {item.content} </Accordion.Body>     
        </Accordion.Item>
      ))}
      </Accordion>
   </section>
    );
}
