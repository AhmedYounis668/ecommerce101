import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addnewaddressaction } from '../../Redux/Actions/UsersAction'
import notify from '../utility/Notification'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const UserAddnewAddress = () => {

  const dispatch=useDispatch()
const navigate=useNavigate();
  const[loading,setloading]=useState(true)
  const[address,setaddress]=useState('')
  const[addressdetails,setaddressdetails]=useState('')
  const[phone,setphone]=useState('')

  const changeaddress=(e)=>{
    setaddress(e.target.value)
  }

  const changeaddressdetails=(e)=>{
    setaddressdetails(e.target.value)
  }

  const changephone=(e)=>{
    setphone(e.target.value)
  }


  const handlesubmitaddaddress=async()=>{
    setloading(true)
await dispatch(addnewaddressaction({
  alias: address,
  details: addressdetails,
  phone: phone,
  city: '',
  postalCode: ""
}))
    setloading(false)
}

const resadd=useSelector(state=>state.allusers.addaddress)

useEffect(()=>{
  if(loading===false)
  {
    if(resadd&&resadd.data)
    {
      notify("Done","success")
      setaddress('')
      setaddressdetails('')
      setphone('')
      setTimeout(() => {
        navigate('/useraddresspage')
      }, 5000)
      
    }
    else
    {
      notify("Error","error")
      return;
    }
  }
},[loading])
  return (
    <div>
      <input onChange={changeaddress} value={address} style={{fontFamily:'El messiri'}} className='w-100 button-55 my-2' type='text' placeholder='تسميه العنوان مثل--المنزل'/>
      <input onChange={changeaddressdetails} value={addressdetails} style={{fontFamily:'El messiri'}} className='w-100 button-55 my-2' type='textarea' placeholder='العنوان بالتفصيل'/>
      <input onChange={changephone} value={phone} style={{fontFamily:'El messiri'}} className='w-100 button-55 my-2' type='number' placeholder='رقم الهاتف'/>
      <div className='d-flex justify-content-center'>
<div onClick={handlesubmitaddaddress}  className='button-52 '>اضافه</div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default UserAddnewAddress
