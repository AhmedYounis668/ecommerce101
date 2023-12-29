import React, { useEffect, useState } from 'react'
import deleteicon from '../../images/delete2.png'
import updateicon from '../../images/updated.png'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import { deleteuseraddressaction, updateuseraddressaction } from '../../Redux/Actions/UsersAction';
import notify from '../utility/Notification';
import { ToastContainer } from 'react-toastify';
const UserAddressshow = ({useraddress}) => {

const dispatch=useDispatch();
  const [showdelete, setShowdelete] = useState(false);

const handleClosedelete = () => setShowdelete(false);
const handleShowdelete = () => setShowdelete(true);
const[loadingdelete,setloadingdelete]=useState(true)



const [showupdate, setShowupdate] = useState(false);

const handleCloseupdate = () => setShowupdate(false);
const handleShowupdate= () => setShowupdate(true);
const[loadingupdate,setloadingupdate]=useState(true)



const handeledelete=async()=>{
setloadingdelete(true)

await dispatch(deleteuseraddressaction(useraddress._id))
setShowdelete(false)
setloadingdelete(false)
}

const resdelete=useSelector(state=>state.allusers.deleteuseraddress)
console.log(resdelete)
useEffect(()=>{
  if(loadingdelete===false)
  {
   
    if(resdelete)
    {
      notify("Deleted Done","success")
      setTimeout(() => {
        window.location.reload(false)
      }, 5000)
      
    }
    else
    {
      notify("Error","error")
      return;
    }
    
  }
},[loadingdelete])


console.log(useraddress)

// update handeling
const[address,setaddress]=useState(useraddress.alias)
const[addressdetails,setaddressdetails]=useState(useraddress.details)
const[phone,setphone]=useState(useraddress.phone)

const onaddresschange=(e)=>{
setaddress(e.target.value)
}

const onaddressdetailschange=(e)=>{
setaddressdetails(e.target.value)
}


const onphonechange=(e)=>{
  setphone(e.target.value)
}


const handeleupdate=async()=>{
  if(address==="")
  {
notify("من فضلك ادخل العنوان","error")
return;
  }
  if(addressdetails==="")
  {
    notify("من فضلك ادخل العنوان بالتفصيل","error")
    return;
  }
  if(phone==="")
  {
    notify("من فضلك ادخل لاقم الهاتف","error")
    return;
  }
  setloadingupdate(true)

  await dispatch(updateuseraddressaction(useraddress._id,{
    alias:address,
    details:addressdetails,
     phone
  }))

  setloadingupdate(false)
}

const resupdate=useSelector(state=>state.allusers.updateuseraddress)

useEffect(()=>{
  if(loadingupdate===false)
  {
    if(resupdate&&resupdate.status===200)
    {
      console.log(resupdate)
notify("Address Updated Done","success") 
setShowupdate(false)
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
},[loadingupdate])
  return (
    <div>


{/* delete modal */}

<Modal show={showdelete} onHide={handleClosedelete}>
    <Modal.Header  style={{textAlign:'center'}}>
      <Modal.Title style={{textAlign:'center'}}>Delete Address .</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Do You sure for Deleteing this Address ?

    </Modal.Body>
    <Modal.Footer>
      <div className='button-55' style={{backgroundColor:'#2d1111',color:'#d2403d',fontFamily:'El messiri'}}onClick={handleClosedelete}>
        Close
      </div>
      <div className='button-55' style={{backgroundColor:'#54ff9f',color:'#d2403d',fontFamily:'El messiri'}} onClick={handeledelete}>
        Delete Address
      </div>
    </Modal.Footer>
  </Modal>






{/* update modal */}

<Modal show={showupdate} onHide={handleCloseupdate}>
    <Modal.Header  style={{textAlign:'center'}}>
      <Modal.Title style={{textAlign:'center'}}>Update Address .</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    Do You sure for Updating this Address ?
<input  onChange={onaddresschange} value={address} className='button-55 w-100 my-2' style={{fontFamily:'El messiri',color:'royalblue'}} type='text' placeholder='ادخل العنوان'/>
<input  onChange={onaddressdetailschange} value={addressdetails} className='button-55 w-100 my-2' style={{fontFamily:'El messiri',color:'royalblue'}} type='text' placeholder=' ادخل العنوان بالتفصيل'/>
<input  onChange={onphonechange} value={phone} className='button-55 w-100 my-2' style={{fontFamily:'El messiri',color:'royalblue'}} type='number' placeholder='ادخل رقم الهاتف'/>

    </Modal.Body>
    <Modal.Footer>
      <div className='button-55' style={{backgroundColor:'#2d1111',color:'#d2403d',fontFamily:'El messiri'}}onClick={handleCloseupdate}>
        Close
      </div>
      <div  className='button-55' style={{backgroundColor:'#54ff9f',color:'#d2403d',fontFamily:'El messiri'}} onClick={handeleupdate}>
        Update Address
      </div>
    </Modal.Footer>
  </Modal>



    <div className='button-2 w-100 my-2'>
    <div className='d-flex justify-content-between'>
    <p style={{fontFamily:'El messiri',color:'royalblue',textAlign:'start'}}><span style={{fontWeight:'bold'}}>العنوان : </span> {useraddress.alias}</p>
<div className='d-flex'>
  <div onClick={handleShowdelete} className='mx-2'><img className='shakebtn'   src={deleteicon}/></div>
  <div onClick={handleShowupdate}><img  className='shakebtn'  src={updateicon}/></div>
</div>
    </div>
    <p className='breaktext2' style={{fontFamily:'El messiri',color:'royalblue',textAlign:'start'}}><span style={{fontWeight:'bold'}}>العنوان بالتفصيل :</span>{useraddress.details}</p>
    <p style={{fontFamily:'El messiri',color:'royalblue',textAlign:'start'}}><span style={{fontWeight:'bold'}}>رقم الهاتف : </span> {useraddress.phone}</p>

    </div>
      <ToastContainer/>
    </div>
  )
}

export default UserAddressshow
