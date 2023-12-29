import React from 'react'

import Col from 'react-bootstrap/Col'
import BrandCard from './BrandCard'
import BrandHomeHook from '../../hook/BrandHomeHook'

const Brandcontainerinpage = () => {
const [brandres,loading,pagecount,getpage]=BrandHomeHook();
  return (
    <Col className='d-flex justify-content-around flex-wrap gap-5'>
    {
      
      brandres.data?(brandres.data.slice(0,18).map((item,index)=>{
      return(

    <BrandCard key={index} id={item._id} img={item.image} title={item.name}/>
     )})):<div class="🤚" style={{marginTop:'200px'}}>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="🌴"></div>		
	<div class="👍"></div>
</div>


    }

    </Col>
  )
}

export default Brandcontainerinpage
