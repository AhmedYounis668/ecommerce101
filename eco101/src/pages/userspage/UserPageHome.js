import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSlider from '../../component/utility/UserSlider'
import UserAllorderComponent from '../../component/users/UserAllorderComponent'
const UserPageHome = () => {
  return (
    <Container style={{minHeight:'680px',marginTop:'130px'}}>
    
      <div style={{marginTop:'30px',fontFamily:'El messiri',color:'blue',textAlign:'center'}} className='w-100'>
      <div style={{fontFamily:'El messiri',color:'blue'}} >اهلا احمد يونس</div>
    <div style={{fontFamily:'El messiri',color:'blue'}}>طلب رقم #4545488897845</div>
    </div>
    <Row className='d-flex '>
    <Col className='col-md-2 col-4'>
<UserSlider/>
</Col>


<Col className='col-md-10 col-8 button-2'>
<UserAllorderComponent/>
<UserAllorderComponent/>
<UserAllorderComponent/>

<div className='d-flex justify-content-between my-4'>
<div><span style={{fontFamily:'El messiri',fontWeight:'bold',color:'royalblue'}}>الحاله/<span style={{fontFamily:'El messiri',fontWeight:'bold'}}>قيد التنفيذ</span></span></div>
<div className='button-52 ' style={{fontWeight:'bold'}} >4000<span className='mx-2' style={{fontFamily:'El messiri',fontWeight:'bold'}}>جنيه</span></div>

</div>


</Col>
</Row>



    </Container>
  )
}

export default UserPageHome
