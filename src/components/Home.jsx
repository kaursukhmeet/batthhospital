import Carousel from 'react-bootstrap/Carousel';
import Img3 from '../assets/images/caraousel1.jpg';
import Img2 from '../assets/images/caraousel2.jpg';
import Img1 from '../assets/images/caraousel3.jpg';

export default function Home(){
    return (
    <Carousel id='home'>
        <Carousel.Item>
        <img className='caraouse' src={Img1} alt='Slide 1'/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className='caraouse' src={Img2} alt='Slide 2'/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='caraouse' src={Img3} alt='Slide 3'/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>);
}