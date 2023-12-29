import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSlider from '../../component/utility/UserSlider'
import UserAddnewAddress from '../../component/users/UserAddnewAddress'

const UserAddNewAddress = () => {
  return (
    <Container style={{minHeight:'680px',marginTop:'110px'}}>
    <div className='w-100 button-55 my-2'style={{textAlign:'center',fontFamily:'El messiri'}}>اضافه عنوان جديد</div>
      <Row>
        <Col className='col-4 col-md-2'>
<UserSlider/>
        </Col>

        <Col className='col-8 col-md-10'> 
<UserAddnewAddress/>
        </Col>
      </Row>
    </Container>
  )
}

export default UserAddNewAddress
