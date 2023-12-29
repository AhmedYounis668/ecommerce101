import React from 'react'
import photo1 from '../../images/sports1.webp'
import photo2 from '../../images/sports2.webp'
import photo3 from '../../images/sports3.webp'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel data-bs-theme="dark" style={{marginTop:'90px'}}>
    <Carousel.Item>
      <img
        className="d-block w-100 sliderbackground"
        src={photo1}
        alt="First slide"
        style={{height:'350px'}}
        
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 sliderbackground"
        src={photo2}
        alt="Second slide"
        style={{height:'350px'}}

      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 sliderbackground"
        src={photo3}
        alt="Third slide"
        style={{height:'350px'}}

      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider
