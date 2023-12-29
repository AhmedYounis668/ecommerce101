import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { userloginaction } from '../../Redux/Actions/UsersAction';
import notify from '../utility/Notification';
import { ToastContainer } from 'react-toastify';
const Login = () => {

  const dispatch=useDispatch();

  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
const[loading,setloading]=useState(true)


const emailchange=(e)=>{
  setemail(e.target.value)
}

const passwordchange=(e)=>{
  setpassword(e.target.value)
}


const onsubmit=async()=>{

  setloading(true)
  await dispatch(userloginaction({
    email,
    password,
  }))
  setloading(false)

}

const res=useSelector(state=>state.allusers.login)

useEffect(()=>{
  if(loading===false)
  {
    if(res)
    {
  if(res&&res.data.token)
{
  localStorage.setItem("token",res.data.token)
 localStorage.setItem("user",JSON.stringify(res.data.data))
    notify("Done","success")
      setTimeout(() => {
    window.location.href="/"
  }, 5000)
  }
  else
  {
    notify("error","error")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return;
  }


    }

  }
},[loading])



  return (
    <div className='spo2'>
    <div style={{minHeight:'550px'}}  className='loginpagedesin '>
    <Col className='d-flex justify-content-center'>
    <div className='loginpageinside  d-flex flex-wrap  justify-content-center col-md-6'>

    <Form.Label htmlFor="inputusername">User Name</Form.Label>
      <Form.Control
        type="text"
        id="inputusername"
        aria-describedby="usernameHelpBlock"
        style={{width:'95%'}}
        className='mx-2'
        value={email}
        onChange={emailchange}
      />
    




    <Form.Label htmlFor="inputPassword5" className='my-2'>Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        style={{width:'95%'}}
        className='mx-2'
        value={password}
        onChange={passwordchange}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>

      <button onClick={onsubmit} className='btnlogin w-75 d-flex justify-content-center flex-wrap col-12' style={{fontFamily:'El messiri',color:'black'}}> 
      <span className='py-2' style={{fontFamily:'El Messiri'}}> تسجيل الدخول</span><i class="fa-sharp fa-solid fa-check mx-2 fs-4 py-1"></i>
     </button>
     <br/>
{/* <Button className='btn btn-danger w-100 my-2 text-center'>تسجيل الدخول<i class="fa-sharp fa-solid fa-check"></i></Button> */}

<div className='col-12 d-flex justify-content-center' style={{marginTop:'18px'}}>

<p>انشاء حساب جديد <span><Link to="/rigister" style={{textDecoration:'none'}}>اضغط هنا</Link></span></p>

</div>

<p> الدخول كادمن <span><Link to="/Adminallproducts" style={{textDecoration:'none'}}>اضغط هنا</Link></span></p>
    </div>
    </Col>
    <ToastContainer/>
    </div>
    </div>
  )
}

export default Login
