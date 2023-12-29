import React, { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Subtitle from '../utility/Subtitle'
import CategouryCard from '../categoury/CategouryCard'
import Col from 'react-bootstrap/esm/Col'
import { useDispatch, useSelector } from 'react-redux'
import { Get_All_Cat } from '../../Redux/Actions/CategoryAction'

const HomeCategoury = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(Get_All_Cat(4))
  },[])
  const category=useSelector(state=>state.allcategory.category)
  const loading=useSelector(state=>state.allcategory.loading)

  return (
    <Container >
     <div class="custom-shape-divider-top-1702042648" style={{marginTop:'440px',zIndex:'-1'}}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill2"></path>
    </svg>
</div>
      <Subtitle title="التصنيفات" btntitle="المزيد.." pathtext="/categoury"/>
<Col className='d-flex justify-content-around flex-wrap gap-5 ' >
{
loading===false?(
category.data?category.data.slice(0,4).map((item,index)=>{return(
      <CategouryCard  title={item.name}  id={item._id}  img={item.image}/>

)}):null
):<div class="🤚" >
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

export default HomeCategoury
