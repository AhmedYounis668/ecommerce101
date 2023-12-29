import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Adminsidbare from '../../component/Admin/Adminsidbare'
import AdminAllproductContainer from '../../component/Admin/AdminAllproductContainer'
import Pagination from '../../component/utility/Pagination'
import AdminViewAllproductscard from '../../hook/products/AdminViewAllproductscard'

const Adminallproductspage = () => {
  const[items,pagecount,getdata]=AdminViewAllproductscard();

  return (
    <Container style={{minHeight:'670px'}}>
    <Row style={{fontSize:'17px'}} className='d-flex mx-2 text-center col-12 button-55 addresadmin'>
        <div style={{color:'royalblue',fontFamily:'El messiri'}}>عرض كل المنتجات</div>
    </Row>


      <Row className='d-flex my-2' >
        <Col className='d-flex  flex-column  col-md-2 col-4  my-2 ' >
<Adminsidbare/>
        </Col>

        <Col className='  col-md-10 col-8'>

<AdminAllproductContainer/>


        </Col>
        <Pagination pagecount={pagecount} onpress={getdata}/>

      </Row>
    </Container>
  )
}

export default Adminallproductspage
