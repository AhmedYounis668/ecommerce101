import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deletecardactin, updatecardqtyaction } from '../../Redux/Actions/CardAction'
import notify from '../utility/Notification'
import { ToastContainer } from 'react-toastify'
import deleteicon from '../../images/delete2.png'

const CardItem = ({item}) => {
  const dispatch=useDispatch()
   console.log(item)
   const URL="http://127.0.0.1:8000/products/";
   let color=item.color



   const[qty,setqty]=useState(item.count)
  const[loading,setloading]=useState(true)
   const onchangeqty=(e)=>{
    setqty(e.target.value)
   }

   const handleqty=async()=>{
setloading(true)
 await dispatch(updatecardqtyaction(item._id,{
   count:qty
 }))
setloading(false)
   }

   const resqtyupdate=useSelector(state=>state.allcart.updatecardqty)

   useEffect(()=>{
    if(loading===false)
    {
      if(resqtyupdate&&resqtyupdate.status===200)
      {
        notify("Done","success")
        setTimeout(() => {
          window.location.reload(false)
        }, 5000)
        
      }
      else{
        notify("Error","error")
        return;
      }
    }
   },[loading])

const[loadingdelete,setloadingdelete]=useState(true)
   const handledeletecard=async()=>{
setloadingdelete(true)
await dispatch(deletecardactin(item._id))
setloadingdelete(false)
   }

   const resqtydelete=useSelector(state=>state.allcart.deletecard)

   useEffect(()=>{
    if(loadingdelete===false)
    {
      if(resqtydelete&&resqtydelete.status==="success")     
      {
notify("Done","success")
setTimeout(() => {
  window.location.reload(false)
}, 5000)

}
else
{
  notify("Error","error")
  return
}
    }
   },[loadingdelete])

  return (
    <Row className='d-flex w-100 button-2 my-3'  style={{height:'260px'}}>
<Col className=' d-flex justify-content-start col-3'>
        <img src={URL+item.product.imageCover} alt='product' style={{width:'100%',height:'250px',borderRadius:'15px'}}/>
</Col>

<Col className='col-9'>
<div className='d-flex justify-content-between my-2'>
<h6 className='button-2' style={{height:'40px'}}><span style={{fontFamily:'El messiri',fontWeight:'bold',color:'royalblue'}}>التصنيف : </span>{item.product.category.name}</h6>
<div onClick={handledeletecard} className='button-2' style={{height:'40px',cursor:'pointer'}}><img className='shakebtn' src={deleteicon} /></div>
</div>

<div className='my-4 ' style={{textAlign:'right',fontSize:'15px',fontFamily:'El Messiri'}}><span style={{fontFamily:'El messiri',fontWeight:'bold',color:'royalblue'}}>اسم المنتج : </span>{item.product.title}</div>
<div className='my-4 ' style={{textAlign:'right',fontSize:'15px',fontFamily:'El Messiri',fontWeight:'bold',color:'royalblue'}}>الماركه :<span style={{textAlign:'right',fontSize:'15px',fontFamily:'El Messiri'}}> {item.product.brand.name}</span> </div>

<div className='d-flex '>

<div className=' ' style={{textAlign:'right',fontSize:'15px',fontFamily:'El Messiri',marginLeft:'10px',color:'royalblue',fontWeight:'bold'}}>اللون المطلوب  :  </div>
<div className='' style={{width:'50px',height:'45px' ,backgroundColor:color,borderRadius:'50%',marginTop:'-15px'}}></div>
</div>


<div className='d-flex justify-content-between'>

<div className='d-flex my-3'>
<label id='qty' className='my-2' style={{fontSize:'15px',fontFamily:'El Messiri'}}>الكميه : </label>
<input type='number' onChange={onchangeqty} value={qty} className='form-control mx-2' style={{textAlign:'center',fontFamily:'El messiri',fontSize:'16px',fontWeight:'bold',width:'70px'}} for='qty'/>
<div onClick={handleqty} className='button-55' style={{fontFamily:'El messiri',background:'black',color:'white'}}>تعديل الكميه</div>
</div>


<div className='button-2 my-3' style={{height:'40px'}}>{item.price||0} LE</div>

</div>
</Col>

<ToastContainer/>
</Row>






  
  )
}

export default CardItem
