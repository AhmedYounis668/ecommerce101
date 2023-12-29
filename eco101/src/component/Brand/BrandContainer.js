import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Subtitle from '../utility/Subtitle'
import Col from 'react-bootstrap/Col'
import BrandCard from './BrandCard'
import BrandHomeHook from '../../hook/BrandHomeHook'

const BrandContainer = ({title,btntitle}) => {
  const [brandres,loading,pagecount,getpage]=BrandHomeHook();
  return (

    <Container>

      <Subtitle title={title} btntitle={btntitle} pathtext="/Brand"/>
      <Col className=' d-flex flex-wrap  justify-content-center gap-5 my-4'>
      {
        
        brandres.data?(brandres.data.slice(0,4).map((item,index)=>
        {return(
          <BrandCard img={item.image} id={item._id} title={item.name}/>

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
    </Container>

  )
}

export default BrandContainer
