import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import CardItem from './CardItem'
import Checkout from './Checkout'
import { useDispatch, useSelector } from 'react-redux'
import { getallcatrtaction } from '../../Redux/Actions/CardAction'

const CardContainer = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    const get=async()=>{
    await  dispatch(getallcatrtaction())

    }
    get()
  },[])


const resgetdatacart=useSelector(state=>state.allcart.getallcart)
console.log(resgetdatacart)

let cartitem=[]
let allcartdata=[]
let cardlenth=[]

if(resgetdatacart&&resgetdatacart.data&&resgetdatacart.data.data)
{
  cartitem=resgetdatacart.data.data
  allcartdata=resgetdatacart
  cardlenth=resgetdatacart.data.data.products
}
else
{
  cartitem=[]
  allcartdata=[]
}

console.log(cardlenth,"555")


  return (
    <Container>
    <div style={{minHeight:'880px'}}>
<Row className='button-2 w-100   ' style={{marginTop:'140px',fontSize:'17px',fontFamily:'El Messiri',border:'2px solid black'}}>عربه التسوق</Row>

<Row className='m-2 '>
<Col className=' col-12  my-2' >

 {
 cartitem.products?(cartitem.products.map((item,index)=>{return(
    <CardItem item={item}  key={index}/>

  )})):<div style={{fontFamily:'El messiri',color:'royalblue',fontWeight:'bold'}}>لايوجد منتجات في العربه</div>
} 
       

        </Col>

        <Col className=' col-12  my-2' >

        <Checkout allcartdata={allcartdata} cardlenth={cardlenth}/>

        </Col>

        </Row>
      </div>
    </Container>
  )
}

export default CardContainer
