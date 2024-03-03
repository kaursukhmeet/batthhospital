import Carousel from 'react-bootstrap/Carousel';
import Img2 from '../assets/images/caraousel2.jpg';

export default function Home(){
    return (
    <Carousel id='home' fade>
        <Carousel.Item>
          <img className='carousal-image' src={Img2} alt='Slide 3'/>
          <Carousel.Caption >
            <h2>First slide label</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='carousal-image' src={Img2} alt='Slide 3'/>
          <Carousel.Caption >
            <h2>Second slide label</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='carousal-image' src={Img2} alt='Slide 3'/>
          <Carousel.Caption >
            <h2>Third slide label</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>);
}