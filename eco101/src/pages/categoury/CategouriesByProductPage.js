import React, { useEffect, useState } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import ProductCardContainer from '../../component/Home/ProductCardContainer'
import { useDispatch, useSelector } from 'react-redux'
import {getproductsbyonecataction } from '../../Redux/Actions/ProductsAction'
import { useParams } from 'react-router-dom'
const CategouriesByProductPage = () => {
    const {id}=useParams()
const dispatch=useDispatch()
let limit=10
const getproducts=async()=>{
   
   await dispatch(getproductsbyonecataction(limit,id,''))

 }
 useEffect(()=>{
      
        getproducts();
    
    },[])

 const product=useSelector(state=>state.allproducts.allprobyonecat)

 let items=[]

 if(product&&product.data)
 {
    items=product.data
  }
  
  return (
    <Container style={{marginTop:'130px',minHeight:'670px'}}>
    <div style={{fontFamily:'El messiri'}}>كل المنتجات علي حسب التصنيف المحدد </div>
    <Col  className='d-flex flex-wrap flex-row justify-content-start  col-12'>

        <ProductCardContainer products={items}/>
       </Col>
</Container>  
  )
}

export default CategouriesByProductPage
