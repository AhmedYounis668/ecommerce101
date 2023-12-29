import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Adminsidbare from '../../component/Admin/Adminsidbare'
import AdminAddProduct from '../../component/Admin/AdminAddProduct'

const AdminAddProductPage = () => {
  return (
    <Container style={{minHeight:'675px'}}>
      <Row className='addresadmin mx-2'>
        <div className='w-100 button-55 text-center ' style={{color:'royalblue',fontSize:'17px',fontFamily:'El messiri'}}>اضافه منتج جديد</div>
      </Row>



<Row>

 <Col className='col-4 col-md-2'>
<Adminsidbare/>
 </Col>

 <Col className='col-8 col-md-10'>
<AdminAddProduct/>
 </Col>    
</Row>



    </Container>
  )
}

export default AdminAddProductPage
