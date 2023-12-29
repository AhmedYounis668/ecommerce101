import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Adminsidbare from '../../component/Admin/Adminsidbare'
import AdminUpdateProductComponent from '../../component/Admin/AdminUpdateProductComponent'

const Adminupdateproduct = () => {
  return (
    <Container style={{minHeight:'670px'}}>
    <Row  className='adminupdatepromargin'>
    <Col className='col-4 col-md-2' >
<Adminsidbare/>
    </Col>
      
      <Col className='col-8 col-md-10 box '>
      <AdminUpdateProductComponent/>
      </Col>
      </Row>
    </Container>
  )
}

export default Adminupdateproduct
