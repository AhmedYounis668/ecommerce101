import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Adminsidbare from '../../component/Admin/Adminsidbare'
import AdminAllOrdersContainer from '../../component/Admin/AdminAllOrdersContainer'
import Pagination from '../../component/utility/Pagination'

const AdminAllOrders = () => {
  return (
    <Container style={{minHeight:'675px'}}>
    <Row className='col-12 button-55 mx-2 text-center addresadmin' >
        <div  style={{fontSize:'17px' , fontFamily:'El messiri',color:'royalblue'}}>كل الطلبات</div>
    </Row>



      <Row>
        <Col className='col-md-2 col-3 my-2'>
<Adminsidbare/>
        </Col>

        <Col className='col-md-10 col-9 my-2 '>
          <AdminAllOrdersContainer/>
        </Col>
      </Row>


<Row className='w-100  d-flex justify-content-center'>
<Col className='col-12 d-flex justify-content-center w-100 '>
<Pagination/>
</Col>
</Row>

    </Container>
  )
}

export default AdminAllOrders
