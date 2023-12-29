import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Adminsidbare from '../../component/Admin/Adminsidbare'
import AdminAddSubCategoryComponent from '../../component/Admin/AdminAddSubCategoryComponent'

const AdminAddSubCategory = () => {
  return (
    <Container style={{minHeight:'670px'}}>
      <Row className='addresadmin mx-2'>
<div className='col-12 w-100 button-55 text-center  ' style={{color:'royalblue',fontSize:'17px',fontFamily:'El messiri'}}> اضافه تصنيف فرعي</div>
      </Row>


      <Row>
        <Col className='col-4 col-md-2'>
<Adminsidbare/>
        </Col>


        <Col className='col-8 col-md-10'>
<AdminAddSubCategoryComponent/>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminAddSubCategory
