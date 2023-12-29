import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ProductImage from './ProductImage'
import ProductText from './ProductText'
import RateContainer from '../Rate/RateContainer'
import ProductCardContainer from '../Home/ProductCardContainer'
import { GetOneProduct } from '../../Redux/Actions/ProductsAction'
import { useParams } from 'react-router-dom'

const ProductDetailsComponent = () => {

  return (
    <Container>
    <div className='d-flex flex-wrap justify-content-start'>
      <Col className='col-12  col-md-4 my-4 mx-3'  >
      <ProductImage/>
      </Col>

      <Col className='col-12 col-md-7 my-4 mx-3'>
        <ProductText/>
      </Col>


      <RateContainer/>
      </div>
    </Container>
  )
}

export default ProductDetailsComponent
