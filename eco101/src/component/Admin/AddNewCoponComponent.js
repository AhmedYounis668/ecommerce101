import React, { useEffect, useRef, useState } from 'react'
import{useDispatch, useSelector}from 'react-redux'
import { addcoponaction, getallcoponsaction } from '../../Redux/Actions/CoponsAction';
import notify from '../utility/Notification'
import { ToastContainer } from 'react-toastify'


const AddNewCoponComponent = ({copon}) => {
    const usedate=useRef();
const dispatch=useDispatch();
    const[coponname,setcoponname]=useState('')
    const[copondate,setcopondate]=useState('')
    const[copondiscount,setcopondiscount]=useState('')
const[loading,setloading]=useState(true)
    const coponnamechange=(e)=>{
      setcoponname(e.target.value)
    }

    const copondatechange=(e)=>{
      setcopondate(e.target.value)
    }

    const copoondiscchange=(e)=>{
      setcopondiscount(e.target.value)
    }


    const onsubmitcopon=async()=>{
      if(coponname===""||copondate===""||copondiscount==="")
      {
        notify("من فضلك اكمل البيانات","error")
        return;
      }
      else
      {

      
setloading(true)

await dispatch(addcoponaction({
  name: coponname,
  expire: copondate,
  discount: copondiscount
}))

setloading(false)
    }
  }


  const res=useSelector(state=>state.allcopons.AddCopon)
  useEffect(()=>{
    if(loading===false)
    {
      if(res&&res.status===201)
      {
      notify("Done","success")  
      setcoponname('')
      setcopondate('')
      setcopondiscount('') 
      setTimeout(() => {
        window.location.reload(false)
      }, 5000)
         
      }
      else
      {
        notify("error","error")
        return;
      }
      
    }
  },[loading])






  return (
    <div>
      <div className='button-2  justify-content-start w-100 my-2'>
<input onChange={coponnamechange} value={coponname} className='button-55 w-100 d-flex my-2' type='text' placeholder='تسميه الكوبون' style={{fontFamily:'El messiri'}}/>
<input onChange={copondatechange} value={copondate} ref={usedate} onBlur={()=>usedate.current.type="text"} onFocus={()=>usedate.current.type="date"} className='button-55 w-100 d-flex my-2' type='text' placeholder='تاريخ انتهاء الكوبون ' style={{fontFamily:'El messiri'}}/>
<input onChange={copoondiscchange} value={copondiscount} className='button-55 w-100 d-flex my-2' type='number' placeholder='نسبه الخصم' style={{fontFamily:'El messiri'}}/>

      </div>

      <div className='d-flex justify-content-center '>

<div onClick={onsubmitcopon} className='button-52 '> اضافه الكوبون </div>
</div>
      




<ToastContainer/>
    </div>
  )
}

export default AddNewCoponComponent
