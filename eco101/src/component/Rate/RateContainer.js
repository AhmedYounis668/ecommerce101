import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'

import RatePost from './RatePost'
import RateItem from './RateItem'
import ProductCardContainer from '../Home/ProductCardContainer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getallReviews } from '../../Redux/Actions/ReviewsAction'
import Pagination from '../utility/Pagination'

const RateContainer = () => {
  const dispatch=useDispatch()
  const[loading,setloading]=useState(true)
  const {id}=useParams()


  useEffect(()=>{
    setloading(true)
dispatch(getallReviews(id,1,10))
setloading(false)
  },[])

  const res=useSelector(state=>state.allreviews.allreviews)

  let review=[]
  let userid=[]
  if(res&&res.data)
  {
    review=res.data
  }
  else{
    review=[]
  }

  if(res&&res.user)
  {
    userid=res.user
  }
  else
  {
    userid=[]
  }



  let pagecount=[]
  {
    if(res&&res.data&&res.data.paginationResult)
    {
      pagecount=res.data.paginationResult.numberOfPages
    }
    else
    {
      pagecount=[]
    }

  }
 

  const onpress=(page)=>{
    setloading(true)
dispatch(getallReviews(id,page,10))
setloading(false)
  }

  return (
    <Col className='my-2 mx-2 col-12 galaryshadow'>

<RatePost id={id}/>

{
  review&&review.data?(review.data.map((item)=>{return(
    <RateItem item={item} userid={userid} pagecount={pagecount} onpress={onpress} />

  )})):null
}

<Pagination pagecount={pagecount} onpress={onpress}/> 







<ProductCardContainer title=" منتجات قد تعجبك"  />

    </Col>

 

  )
}

export default RateContainer
