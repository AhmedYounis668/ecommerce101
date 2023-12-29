import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Col from 'react-bootstrap/esm/Col'
import { createNewUserAccount } from '../../Redux/Actions/UsersAction';
import notify from '../utility/Notification'
import { ToastContainer } from 'react-toastify'
const Rigester = () => {
  const dispatch=useDispatch();
  const[name,setname]=useState('');
  const[email,setemail]=useState('')
  const[phone,setphone]=useState('');
  const[password,setpassword]=useState('')
  const[confirmpassword,setconfirmpassword]=useState('')
  const[loading,setloading]=useState(true)


  const namechange=(e)=>{
    setname(e.target.value)
  }

  const emailchange=(e)=>{
    setemail(e.target.value)
  }

  const phonechange=(e)=>{
    setphone(e.target.value)
  }
  const passwordchange=(e)=>{
    setpassword(e.target.value)
  }

  const confirmpasswordchange=(e)=>{
    setconfirmpassword(e.target.value)
  }

const validations=()=>{
if(name==="")
{
  notify("من فضلك ادخل اسم المستخدم اولا","error");
  return;
}
else if(email==="")
{
  notify("من فضلك ادخل الايميل اولا","error")
  return;
}
else if(phone==="")
{
  notify("من فضلك ادخل رقم الههاتف اولا","error");
  return
}
else if(password==="")
{
  notify("من فضلك ادخل كلمه السر اولا","error")
  return;
}
else if(confirmpassword==="")
{
  notify("من فضلك قم بادخال تاكيد كلمه السر اولا","error")
  return;
}
else if(password!=confirmpassword)
{
  notify("كلمه السر وتاكديها غير متطابقتان","error")
  return;
}
if(password.length<6)
{
  notify("من فضلك قم بادخال باسورد مكون من 6ارقام علي الاقل ","error")
  return
}
}
  const addnewaccount=async()=>{
validations();
    setloading(true)
    await dispatch(createNewUserAccount({
      name,
      email,
      password,
passwordConfirm:confirmpassword,
      phone
    }))

setloading(false)


    


  }
  const res=useSelector(state=>state.allusers.CreateUser)

  useEffect(()=>{
    if(loading===false)
    {
      if(res&&res.status===201)
      {
if(res&&res.data.token)
{
   localStorage.setItem("token",res.data.token)
}
        
        console.log(res)

        notify("Done","success")
        window.location.href="/login"
      }
      else
      {
        notify("Error","error")
        return
      }
    }
  },[loading])


  return (
    <div style={{minHeight:'780px'}}  className='loginpagedesin'>
    <Col className='d-flex justify-content-center my-4' >
    <div style={{marginTop:'100px'}} className='loginpageinside d-flex flex-wrap  justify-content-center col-md-6 '>

<label>First Name</label>
<input
        type="text"
        style={{width:'95%'}}
        className='m-2 regristerinput'
        value={name}
        onChange={namechange}
      
        />

    





<label>E-mail</label>

<input
        type="email"
        style={{width:'95%'}}
        className='m-2 regristerinput'
        value={email}
        onChange={emailchange}
        />

    
        <label>phone</label>
<input
   
        type="phone"
        style={{width:'95%'}}
        className='m-2 regristerinput'
        value={phone}
        onChange={phonechange}
      />


      <label>Password</label>
    <input
        type="password"
        style={{width:'95%'}}
        className='m-2 regristerinput'
        value={password}
        onChange={passwordchange}
      
        />

<label>ConfirmPassword</label>
      <input
        type="password"
        style={{width:'95%'}}
        className='m-2 regristerinput'
        value={confirmpassword}
        onChange={confirmpasswordchange}
      
    />


      


<button onClick={addnewaccount} className='btnlogin w-75 my-2 text-center' style={{textAlign:'center'}}> <span className='py-3' style={{color:'black',fontFamily:'El messiri'}}>انشاء الحساب<i class="fa-sharp fa-solid fa-check mx-2 fs-4 py-1"></i></span> </button>

    </div>
    </Col>
    <ToastContainer/>
    </div>
  )
}

export default Rigester
