import React, { useEffect, useState } from 'react'
import Subtitle from '../utility/Subtitle'
import ProductCard from '../products/ProductCard'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { getallwishlistaction } from '../../Redux/Actions/WishlistAction'

const ProductCardContainer = ({title,btntitle,products}) => {

  const dispatch=useDispatch();
  const[favpro,setfavpro]=useState([])
const[loading,setloading]=useState(true)

  useEffect(()=>{
    const get=async()=>{
      setloading(true)
  await dispatch(getallwishlistaction())
  setloading(false)
    }
    get()
  },[])

  const res=useSelector(state=>state.allwishlist.AllWishlist)


let fav2=[]
  useEffect(()=>{
    if(loading===false)
   {
     
    if(res&&res.data&&res.data.data)
    {
      let fav2=res&&res.data&&res.data.data
      setfavpro(fav2.map(item=>item._id))
    }
    else
    {
      setfavpro([])
    }

}
    
  },[loading])

  
  return (
      <Container  >

      <div >
      
      {
        products?(<Subtitle title={title} btntitle={btntitle} pathtext="/searchpage"/>):null
      }
      </div>

 <Col className='d-flex justify-content-around flex-wrap gap-5  ' > 
 

{
  products?(products.slice(0,4).map((item,index)=>{return(
    <ProductCard key={index} item={item} favpro={favpro}/>

  )})):null
}
      
 </Col> 

    </Container>
  )
}

export default ProductCardContainer
