import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import UserSlider from '../../component/utility/UserSlider'
import UserAddressshow from '../../component/users/UserAddressshow'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getalladdressaction } from '../../Redux/Actions/UsersAction'

const UserAddressesPage = () => {
  const dispatch=useDispatch();
const[loading,setloading]=useState(true)
useEffect(()=>{
  const get=async()=>{
    setloading(true)
await dispatch(getalladdressaction())
setloading(false)
}
  get()
},[])
const[address,setaddress]=useState([])
const resaddress=useSelector(state=>state.allusers.getalladdress)
useEffect(()=>{
  if(loading===false)
  {
    if(resaddress&&resaddress.data)
    {

setaddress(resaddress.data)
    }
    else
    {
      setaddress([])
    }
  }

},[loading])

  return (
    <Container style={{minHeight:'680px',marginTop:'110px'}}>
    <div className='w-100 button-55' style={{textAlign:'center',fontFamily:'El Messiri'}}>دفتر العناوين</div>
      <Row>
        <Col className='col-4 col-md-2'>
<UserSlider/>
        </Col>

        <Col className='col-8 col-md-10'>

{
  address.data?(address.data.map((item,index)=>{
    return(
      <UserAddressshow useraddress={item} key={index} />

  )})):<div className='my-3 d-flex justify-content-center' style={{fontFamily:'Elmessiri',color:'royalblue',fontWeight:'bold'}}>لايوجد عناوين شخصيه</div>
}
        </Col>

<Link to={`/useraddnewaddress`} style={{textDecoration:'none'}}>
        <div className='d-flex justify-content-center'>
<div  className='button-52 '>اضافه عنوان</div>
        </div>
        </Link>
      </Row>
    </Container>
  )
}

export default UserAddressesPage
