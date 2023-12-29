import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import deleteicon from '../../images/delete2.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteallcardaction } from '../../Redux/Actions/CardAction'
import notify from '../utility/Notification'
import { ToastContainer } from 'react-toastify'
import { usecoponaction } from '../../Redux/Actions/CoponsAction'

const Checkout = ({allcartdata,cardlenth}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  console.log(allcartdata,"444")
   
  let alltotalprice=0;
  let totalpriceafterdiscount=0;
    if(allcartdata&&allcartdata.data&&allcartdata.data.data)
    {
      alltotalprice=allcartdata.data.data.totalCartPrice
      totalpriceafterdiscount=allcartdata.data.data.totalAfterDiscount
    }

    
     
   
  
 

  const[loadingdelete,setloadingdelete]=useState(true)

  const handledelteallcard=async()=>{
    setloadingdelete(true)
await dispatch(deleteallcardaction())

    setloadingdelete(false)
  }

  const resdelete=useSelector(state=>state.allcart.deleteallcard)

  useEffect(()=>{
    if(loadingdelete===false)
    {
      console.log(resdelete)
      if(resdelete==="")
      {
notify("Done","success")

setTimeout(() => {
  window.location.reload(false)
}, 5000)



}
else
{
  notify("Error","eror")
  return;
}
    }
  },[loadingdelete])


const[coponname,setcoponname]=useState('')
const[loadingcopon,setloadingcopon]=useState(true)
const onchangecoponname=(e)=>{

setcoponname(e.target.value)


}


const handlecopondone=async()=>{

if(coponname==="")
{
notify("من فضلك قم بادخال الكوبون اولا","error")
return;
}
setloadingcopon(true)
await dispatch(usecoponaction({
  couponName:coponname
}))
setloadingcopon(false)
}

const rescopon=useSelector(state=>state.allcopons.usecopon)

useEffect(()=>{
  if(loadingcopon===false)
  {
    if(rescopon&&rescopon.data&&rescopon.data.data)
    {
    if(rescopon&&rescopon.status===200)
    {
      notify("Copon Applied successfully","success")

      setTimeout(() => {
        window.location.reload(false)
      }, 5000)
      
     
      }
    }
    else
    {
      notify("Error","error")
      return;
    }
  }
},[loadingcopon])


  const handlecarddone=()=>{
 if(cardlenth.length>=1)
 {
navigate("/AdminPayment")
 }
 else
 {
  notify("من فضلك اضف منتجات للعربه اولا","error")
  return;
 }
  }

  return (
    <div className='my-2 button-2 w-100'>
    <div className=' d-flex justify-content-center'>
    <label id='discount'className='m-2 ' style={{fontFamily:'El Messiri',fontSize:'15px'}} >كود الخصم : </label>
      <input onChange={onchangecoponname} value={coponname} type='text' className='form-control  w-50'/>
      <div onClick={handlecopondone} className='mx-2 button-2 'style={{cursor:'pointer',backgroundColor:'royalblue',color:'white',width:'100px'}}>تطبيق</div>

      </div>
      <div style={{fontFamily:'El messiri',fontWeight:'bold',fontSize:'25px',color:'royalblue'}} className='d-flex justify-content-center m-3 w-100' >الاجمالي : <span> {totalpriceafterdiscount>=1?(`السعر بعد الخصم : ${totalpriceafterdiscount} / السعر قبل الخصم :${alltotalprice}`):`السعر قبل الخصم هو :${alltotalprice}`}</span></div>

      <div  onClick={handledelteallcard} className='d-flex justify-content-center my-3' >
<div className=' d-flex justify-content-center button-55 ' style={{width:'50%',fontFamily:'El messiri',fontSize:'10px'}}>حذف كل المنتجات في العربه<img src={deleteicon} alt='deleteallcard' className='shakebtn'/></div>
</div>


<div className='d-flex justify-content-center'>
<div onClick={handlecarddone} className=' d-flex justify-content-center button-52 ' style={{width:'50%'}}>اتمام عمليه الشراء</div>
</div>




<ToastContainer/>
    </div>

  )
}

export default Checkout
