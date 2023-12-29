import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeoldpassaction, updateuserdataaction } from '../../Redux/Actions/UsersAction';
import notify from '../utility/Notification'
import { ToastContainer } from 'react-toastify'
import updateicon from '../../images/updated.png'
import Modal from 'react-bootstrap/Modal';
import {useNavigate}from 'react-router-dom'
const UserProfileComponent = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const[oldpass,setoldpass]=useState('')
  const[newpass,setnewpass]=useState('')
  const[confirmnewpass,setconfirmnewpass]=useState('')
  const[loading,setloading]=useState(true)

  let user=[];
 
    if(localStorage.getItem("user")!=null)
    {

      user=JSON.parse(localStorage.getItem("user"))
    }
    else
    {
      user=[]
    }


  console.log(user)
  const onchangeoldpass=(e)=>{
    setoldpass(e.target.value)
  }

  const onchangenewpass=(e)=>{
    setnewpass(e.target.value)
  }

  const onchangeconfirmnewpass=(e)=>{
    setconfirmnewpass(e.target.value)
  }

const handlesubmit=async()=>{
  if(oldpass==="")
  {
    notify("من فضلك ادخل الباسورد القديم","error")
    return;
  }
  if(newpass==="")
  {
notify("من فضلك ادخل باسورد الجديد","error")
return;
  }
  if(newpass.length<=6)
  {
    notify("من فضلك ادخل باسورد اكبر من 6حروف","error")
    return;
  }
  if(confirmnewpass==="")
  {
    notify("من فضلك قم بتاكيد الباسورد الجديد","error")
    return;
  }
  if(confirmnewpass!=newpass)
  {
    notify("من فضلك تاكد من ان الباسورد الجديد مشاتبه لتاكيده","error")
    return;
  }
setloading(true)

await dispatch(changeoldpassaction({
  currentPassword:oldpass,
  password:newpass,
  passwordConfirm:confirmnewpass,
}))

setloading(false)
}

const res=useSelector(state=>state.allusers.changeoldpass)

useEffect(()=>{
  if(loading===false)
  {
if(res&&res.status===200)
{
  notify("Done","success");
  setoldpass('')
  setnewpass('')
  setconfirmnewpass('')
  setTimeout(() => {
    navigate("/Login")
  }, 5000)
  
}
else
{
  notify("Error","error")
  return;
}
  }
},[loading])




// update modal

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [username,setusername]=useState(user.name)
const[phone,setphone]=useState(user.phone)
const[email,setemail]=useState(user.email)

const onusernamechange=(e)=>{
  setusername(e.target.value)
}

const onphonechange=(e)=>{
  setphone(e.target.value)
}

const onemailchange=(e)=>{
  setemail(e.target.value)
}

let body
if(user.email===email)
{
  body={
    name:username,
    phone,
  }
}
else if(user.phone===phone)
{
  body={
    name:username,
    email,
  }

}
else if(user.name===username)
{
  body={
    email,
    phone,
  }
}
else 
{
  body={
    name:username,
    email,
    phone,
  }

}


const[loadingupdate,setloadingupdate]=useState(true)

const handleupdatepersonaldata=async()=>{
  console.log(resupdate,"444")
  if(username==="")
  {
    notify("من فضلك ادخل اسم المستخدم اولا","error")
    return;
  }
   if(email==="")
  {
    notify("من فضلك ادخل الايميل","error")
    return;
  }
   if(phone==="")
  {
    notify("متن فضلك ادخل الفون","error")
    return;
  }
setloadingupdate(true)
await dispatch(updateuserdataaction(body))
setloadingupdate(false)
}

const resupdate=useSelector(state=>state.allusers.updateuserdata)

useEffect(()=>{
  if(loadingupdate===false)
  {
   
    if(resupdate&&resupdate.status===200)
    {
notify("Done--data updated successfully","success")
localStorage.setItem("user",JSON.stringify(resupdate.data.data.user))
setShow(false)
setTimeout(() => {

  window.location.reload(false)
}, 2000)

    }
  }
},[loadingupdate])


  return (



   

    <div>



{/* update modal */}

  <Modal show={show} onHide={handleClose}>
    <Modal.Header  style={{textAlign:'center'}}>
      <Modal.Title style={{textAlign:'center'}}>Update Personal Profile Data</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className='w-100 button-2 justify-content-start my-2'>
    <input onChange={onusernamechange} value={username} type='text' placeholder='  ادخل اسم المستخدم الجديد ' className='button-55 d-flex justify-content-start w-100 my-2' style={{fontFamily:'El messiri'}}/>
    <input onChange={onphonechange} value={phone} type='number' placeholder='  ادخل رقم الهاتف' className='button-55 d-flex justify-content-start w-100 my-2' style={{fontFamily:'El messiri'}}/>
    <input onChange={onemailchange} value={email} type='email' placeholder='   ادخل الايميل الجديد' className='button-55 d-flex justify-content-start w-100 my-2' style={{fontFamily:'El messiri'}}/>

</div>

    </Modal.Body>
    <Modal.Footer>
      <div className='button-55' style={{backgroundColor:'#2d1111',color:'#d2403d',fontFamily:'El messiri'}}onClick={handleClose}>
        Close
      </div>
      <div className='button-55' style={{backgroundColor:'#54ff9f',color:'#d2403d',fontFamily:'El messiri'}} onClick={handleupdatepersonaldata}>
        Change Data
      </div>
    </Modal.Footer>
  </Modal>



    <div className='w-100 button-2 justify-content-start my-2'>

    <div className='d-flex justify-content-between'>
    <p className='d-flex justify-content-start' style={{fontFamily:'El messiri'}}>الاسم : <span style={{fontFamily:'El messiri',color:'royalblue',fontWeight:'bold'}}>{user.name} </span></p>
        <div onClick={handleShow}><img src={updateicon}  className='shakebtn' alt='updateicon'/></div>
    </div>
    
      <p className='d-flex justify-content-start' style={{fontFamily:'El messiri'}}>رقم الهاتف : <span style={{fontFamily:'El messiri',color:'royalblue',fontWeight:'bold'}}>{user.phone}</span></p>
      <p className='d-flex justify-content-start' style={{fontFamily:'El messiri'}}>الايميل : <span style={{fontFamily:'El messiri',color:'royalblue',fontWeight:'bold'}}>{user.email}</span></p>

</div>

<div className='w-100 button-2 justify-content-start my-2'>
    <div className='w-100 button-55' style={{fontFamily:'El messiri' ,fontWeight:'bold',color:'royalblue'}}>تغير كلمه المرور</div>
    <input onChange={onchangeoldpass} value={oldpass} type='password' placeholder='كلمه المرور القديمه' className='button-55 d-flex justify-content-start w-100 my-2' style={{fontFamily:'El messiri'}}/>
    <input onChange={onchangenewpass} value={newpass} type='password' placeholder='كلمه المرور الجديده' className='button-55 d-flex justify-content-start w-100 my-2' style={{fontFamily:'El messiri'}}/>
    <input onChange={onchangeconfirmnewpass} value={confirmnewpass} type='password' placeholder='تاكيد كلمه المرور الجديده' className='button-55 d-flex justify-content-start w-100 my-2' style={{fontFamily:'El messiri'}}/>

</div>

<div className='d-flex justify-content-center '>

<div onClick={handlesubmit} className='button-52 '>تغير كلمه المرور</div>
</div>
<ToastContainer/>
</div>
  )
}

export default UserProfileComponent
