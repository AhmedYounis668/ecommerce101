import React from 'react'
import Container from 'react-bootstrap/Container'
import Brandcontainerinpage from '../../component/Brand/Brandcontainerinpage'
import Col from 'react-bootstrap/Col'
import Pagination from '../../component/utility/Pagination'
import BrandHomeHook from '../../hook/BrandHomeHook'
const BrandPage = () => {
  const [,,pagecount,getpage]=BrandHomeHook();
 return (
    <div style={{minHeight:'670px'}}>
      <Container style={{marginTop:'100px'}}>
      <Brandcontainerinpage/>
      
      <Col className='d-flex justify-content-center my-4 p-3'>
      {
        pagecount>1?(<Pagination pagecount={pagecount} onpress={getpage}/>
):null
      }
      </Col>

      </Container>
    </div>
  )
}

export default BrandPage
