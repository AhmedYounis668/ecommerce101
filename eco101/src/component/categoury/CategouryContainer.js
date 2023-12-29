import React, { useEffect } from 'react'
import {useDispatch,useSelector}from 'react-redux'
import Container from 'react-bootstrap/Container'
import CategouryCard from './CategouryCard'
import Row from 'react-bootstrap/Row'
import { Get_All_Cat, Get_All_Cat_page } from '../../Redux/Actions/CategoryAction'
import Pagination from '../utility/Pagination'
const CategouryContainer = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
     dispatch(Get_All_Cat(18));
  },[])
  const category=useSelector(state=>state.allcategory.category)
  const loading=useSelector(state=>state.allcategory.loading)

  let pagecount=0;
  if(category&&category.paginationResult)
  {
    pagecount=category.paginationResult.numberOfPages
  }

  const getpage=(page)=>{
    dispatch(Get_All_Cat_page(page))
  }
  return (
    <Container style={{minHeight:'670px'}}>

    <Row className='d-flex justify-content-around ' style={{marginTop:'100px'}}>
    {
      loading===false?
      (
      category.data?category.data.slice(0,18).map((item)=>{
        return(

    <CategouryCard id={item._id}  title={item.name} img={item.image}/>

        )}):null
        ):<div class="🤚" style={{marginTop:'400px'}}>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="🌴"></div>		
	<div class="👍"></div>
</div>
  
    }
      {
      pagecount>1?(<Pagination pagecount={pagecount} onpress={getpage}/>):null

      }


    </Row>
    </Container>
  )
}

export default CategouryContainer
