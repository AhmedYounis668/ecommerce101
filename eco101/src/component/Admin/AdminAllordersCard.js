import React from 'react'
import { Col, Row } from 'react-bootstrap'
import mobile from '../../images/mobile.png'

const AdminAllordersCard = () => {
  return (
    <Row className='d-flex w-100 button-2 my-3'  style={{height:'275px'}}>
    <Col className=' d-flex justify-content-start col-3'>
            <img src={mobile} alt='product' style={{width:'100%',height:'250px'}}/>
    </Col>
    
    <Col className='col-9'>
    <div className='d-flex justify-content-between my-2'>
    <h6 className='button-2' style={{height:'40px'}}>الكترونات</h6>
    <div className='button-2' style={{height:'40px'}}>delete</div>
    </div>
    
    <div className='my-4 aaa' style={{textAlign:'right',fontFamily:'El Messiri'}}>ايفون 14 بروs ماكس 14%</div>
    <div className='my-4 ' style={{textAlign:'right',fontSize:'15px',fontFamily:'El Messiri'}}>الماركه : <span style={{textAlign:'right',fontSize:'15px',fontFamily:'El Messiri'}}>ابل</span> </div>
    
    <div className='d-flex '>
    
    <div className=' ' style={{textAlign:'right',fontSize:'15px',fontFamily:'El Messiri',marginLeft:'10px'}}>اللون المطلوب  :  </div>
    <div className='' style={{width:'50px',height:'45px' ,backgroundColor:'red',borderRadius:'50%',marginTop:'-15px'}}></div>
    </div>
    
    
    <div className='d-flex justify-content-md-between justify-content-center w-100 '>
    
    <div className='d-flex my-3'>
    <label id='qty' className='my-2' style={{fontSize:'15px',fontFamily:'El Messiri'}}>الكميه : </label>
    <input type='number' className='form-control mx-2' style={{width:'60px'}} for='qty'/>
    </div>
    
    
    <div className='button-2 my-3 fsprice' >35000 LE</div>
    
    </div>
    </Col>
    
    </Row>
  )
}

export default AdminAllordersCard
