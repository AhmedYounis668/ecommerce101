import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import discount from '../../images/laptops.png'
const DiscountCard = () => {
  return (
  
    <Container>
    <Card className='my-5 discountcard  w-100'>
    <Card.Body>
    <div className='d-flex justify-content-around text-center'>
      <p style={{marginTop:'40px'}}>Discount up 30%</p>
      <img src={discount} alt='discount' style={{width:'50%',height:'80px'}}/>
      </div>
    </Card.Body>
  </Card>
  </Container>

  )
}

export default DiscountCard
