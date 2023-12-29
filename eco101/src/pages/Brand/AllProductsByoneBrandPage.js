import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandContainer from '../../component/Brand/BrandContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getallproductsbyonebrandaction } from '../../Redux/Actions/ProductsAction'
import ProductCardContainer from '../../component/Home/ProductCardContainer'

const AllProductsByoneBrandPage = () => {

    const {id}=useParams()
    const dispatch=useDispatch()
    let limit=10
    const getproducts=async()=>{
       
       await dispatch(getallproductsbyonebrandaction(limit,id,''))
    
     }
     useEffect(()=>{
          
            getproducts();
        
        },[])
    
     const product=useSelector(state=>state.allproducts.productsbyonebrand)
    
     let items=[]
    
     if(product&&product.data)
     {
        items=product.data
      }
      console.log(items,"sss")
  return (
    <Container style={{minHeight:'680px',marginTop:'130px'}}>
    <div style={{fontFamily:'El messiri'}}>كل المنتجات علي حسب البراند المحدد</div>
    <Row>
        <Col className='d-flex justify-content-start col-12'>
<ProductCardContainer  products={items}/>
        </Col>
    </Row>
      
    </Container>
  )
}

export default AllProductsByoneBrandPage
