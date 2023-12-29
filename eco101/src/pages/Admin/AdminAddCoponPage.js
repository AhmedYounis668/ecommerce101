import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Adminsidbare from '../../component/Admin/Adminsidbare'
import AddNewCoponComponent from '../../component/Admin/AddNewCoponComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getallcoponsaction } from '../../Redux/Actions/CoponsAction'
import AdminShowAllcopons from '../../component/Admin/AdminShowAllcopons'

const AdminAddCoponPage = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    const get=async()=>{
  await dispatch(getallcoponsaction())
    }
    get()
  },[])
  
  
  const allcopon=useSelector(state=>state.allcopons.allcopons)
  
  let copondata=[]
  if(allcopon&&allcopon.data&&allcopon.data.data)
  {
    console.log(allcopon)
    copondata=allcopon.data.data
  }
  else
  {
    copondata=[]
  }
  return (
    <Container style={{minHeight:'680px',marginTop:'120px'}}>
<div className='button-55 w-100' style={{textAlign:'center',color:'royalblue',fontWeight:'bold',fontFamily:'El messiri'}}>اضافه كوبون خصم جديد</div>
<Row>
    <Col className='col-4 col-md-2'>
<Adminsidbare/>
    </Col>

    <Col className='col-8 col-md-10'>
    
          <AddNewCoponComponent />

     
          <div className='button-55 w-100 my-4' style={{fontFamily:'El messiri',fontWeight:'bold',textAlign:'center'}}>الكوبونات الحاليه</div>

    {
      copondata?(copondata.map((copon,index)=>{
        return(
    <AdminShowAllcopons copon={copon} key={index}/>
    )})):null
    }
    </Col>
</Row>
    </Container>
  )
}

export default AdminAddCoponPage
