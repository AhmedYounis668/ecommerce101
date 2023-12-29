import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSlider from '../../component/utility/UserSlider'
import ProductCardContainer from '../../component/Home/ProductCardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getallwishlistaction } from '../../Redux/Actions/WishlistAction'
import { Get_Products_Data } from '../../Redux/Actions/ProductsAction'
const UserFavaurateproducts = () => {
const dispatch=useDispatch()
const[items,setitems]=useState([])
const[loading,setloading]=useState(true)
useEffect(()=>{
    const get=async()=>{
        setloading(true)
await dispatch(getallwishlistaction())
setloading(false)
    }
    get();
},[])

const res=useSelector(state=>state.allwishlist.AllWishlist)
console.log(res)
useEffect(()=>{
    if(loading===false)
    {
        if(res&&res.data&&res.data.data)
        setitems(res.data.data)
    }
},[loading])

console.log(res.data)
  return (
    <Container style={{minHeight:'680px',marginTop:'120px'}}>
    <div className='button-55 w-100 my-2' style={{textAlign:'center',fontFamily:'El messiri'}}>قائمه المفضله</div>
      <Row>
        <Col className='col-4 col-md-2'>
<UserSlider/>
        </Col>

        <Col className='col-8 col-md-10'>
        <ProductCardContainer products={items}/>

        </Col>
      </Row>
    </Container>
  )
}

export default UserFavaurateproducts
