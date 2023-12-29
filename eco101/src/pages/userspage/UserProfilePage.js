import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSlider from '../../component/utility/UserSlider'
import UserProfileComponent from '../../component/users/UserProfileComponent'

const UserProfilePage = () => {
  return (
    <Container style={{marginTop:'100px',minHeight:'680px'}}>
    <div className='button-55 w-100 my-2' style={{fontFamily:'El messiri',color:'royalblue',textAlign:'center'}}>الملف الشخصي</div>
    <Row>
<Col className='col-4 col-md-2'>
<UserSlider/>
</Col>

<Col className='col-8 col-md-10'>
<UserProfileComponent/>
</Col>
    </Row>
      
    </Container>
  )
}

export default UserProfilePage
