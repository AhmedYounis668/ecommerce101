import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Adminsidbare from '../../component/Admin/Adminsidbare'
import AdminAddcategorycomponent from '../../component/Admin/AdminAddcategorycomponent'

const AddCategorey = () => {
  return (
    <Container style={{minHeight:'470px'}}>
      <Row className='d-flex w-100 addresadmin mx-2 button-55'  >
        <div className='w-100 d-flex justify-content-center ' style={{color:'royalblue',fontSize:'17px',fontFamily:'El messiri'}}>اضافه تصنيف جديد</div>
      </Row>


      <Row>
        <Col className='col-md-2 col-4'>
<Adminsidbare/>
        </Col>

        <Col className='col-md-10 col-8 '>
<AdminAddcategorycomponent/>

        </Col>

      </Row>

<Row className='w-100 '>
    <Col className='col-12 d-flex justify-content-center'>
    </Col>
</Row>
    </Container>
  )
}

export default AddCategorey
