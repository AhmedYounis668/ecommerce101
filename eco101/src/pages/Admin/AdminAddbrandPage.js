import React from 'react'
import {Container,Row,Col}from 'react-bootstrap'
import Adminsidbare from '../../component/Admin/Adminsidbare'
import AdminAddBrandComponent from '../../component/Admin/AdminAddBrandComponent'
const AdminAddbrandPage = () => {
  return (
    <Container style={{minHeight:'670px'}}>
      <Row className='addresadmin button-55 w-100 mx-2'>
<div className='col-12 w-100 ' style={{fontSize:'17px',fontFamily:'EL messiri',color:'royalblue',textAlign:'center'}}>اضافه براند جديد</div>
      </Row>


      <Row>
        <Col className='col-4 col-md-2'>
<Adminsidbare/>
        </Col>

        <Col className='col-8 col-md-10'>

<AdminAddBrandComponent/>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminAddbrandPage
