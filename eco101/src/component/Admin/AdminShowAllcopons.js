import React, { useEffect, useRef, useState } from 'react'
import deleteicon from '../../images/delete2.png'
import updateion from '../../images/updated.png'
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deletecoponaction, updatecoponaction } from '../../Redux/Actions/CoponsAction';
import notify from '../utility/Notification';
import { ToastContainer } from 'react-toastify'

const AdminShowAllcopons = ({copon}) => {

  const dispatch=useDispatch()
    const datestring=copon.expire

    const formatedate=(datestring)=>{
        const option={year:'numeric',month:'numeric',day:'numeric'}
        return new Date(datestring).toLocaleDateString(undefined,option)
    }





    const [showdelete, setShowdelete] = useState(false);
    const[loadingdelete,setloadingdelete]=useState(true)
    const handleClosedelete = () => setShowdelete(false);
    const handleShowdelete = () => setShowdelete(true);


    const handledeletesubmit=async()=>{
setloadingdelete(true)
      await dispatch(deletecoponaction(copon._id))
      setloadingdelete(false)
    }

    const resdelete=useSelector(state=>state.allcopons.deletecopon)
    useEffect(()=>{

      if(loadingdelete===false)
      {
       if(resdelete==="")
       {
        notify("Copon Deleted","success")
        handleClosedelete()
       }
setTimeout(() => {
  window.location.reload(false)
}, 5000)

      }

    },[loadingdelete])




    // update copon

    const usedate=useRef();

    const[coponname,setcoponname]=useState(copon.name)
    const[copondate,setcopondate]=useState(formatedate(datestring))
    const[copondiscount,setcopondiscount]=useState(copon.discount)
    const coponnamechange=(e)=>{
      setcoponname(e.target.value)
    }

    const copondatechange=(e)=>{
      setcopondate(e.target.value)
    }

    const copoondiscchange=(e)=>{
      setcopondiscount(e.target.value)
    }

    const [showupdate, setShowupdate] = useState(false);
    const[loadingupdate,setloadingupdate]=useState(true)
    const handleCloseupdate = () => setShowupdate(false);
    const handleShowupdate = () => setShowupdate(true);

const handleupdatesubmit=async()=>{
setloadingupdate(true)
await dispatch(updatecoponaction(copon._id,{
  name:coponname,
  expire:copondate,
  discount:copondiscount,
}))
setloadingupdate(false)
}



const resupdate=useSelector(state=>state.allcopons.updatecopon)


useEffect(()=>{
  if(loadingupdate===false)
  {
    console.log(resupdate,"ssss")
    if(resupdate&&resupdate.status===200)
    {
      notify("Updated Done","success")
      handleCloseupdate()
          setTimeout(() => {
            window.location.reload(false)
          }, 5000)
    }
    else{
      notify("Error","error")
      return;
    }
  
  }
},[loadingupdate])
  return (
    <div>

{/* delete copon */}


      <Modal
        show={showdelete}
        onHide={handleClosedelete}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title style={{fontFamily:'El messiri',color:'royalblue'}}>حذف كوبون </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>
          Do you sure for deleting this copon ?
        </Modal.Body>
        <Modal.Footer>
          <div className='button-55' style={{backgroundColor:'royalblue',color:'white',fontFamily:'El messsiri',fontWeight:'bold'}} onClick={handleClosedelete}>
            Close
          </div>
          <div onClick={handledeletesubmit} className='button-55' style={{backgroundColor:'black',color:'white',fontFamily:'El messsiri',fontWeight:'bold'}}>Delete</div>
        </Modal.Footer>
      </Modal>

    {/* //////////////////////////////////////////////////////////////////////// */}





{/* update copon */}


<Modal
        show={showupdate}
        onHide={handleShowupdate}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title style={{fontFamily:'El messiri',color:'royalblue',textAlign:'center'}}> Do you Sure for updateing this copon ? </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>
        <div className='button-2  justify-content-start w-100 my-2'>
<input onChange={coponnamechange} value={coponname} className='button-55 w-100 d-flex my-2' type='text' placeholder='تسميه الكوبون' style={{fontFamily:'El messiri'}}/>
<input onChange={copondatechange} value={copondate} ref={usedate} onBlur={()=>usedate.current.type="text"} onFocus={()=>usedate.current.type="date"} className='button-55 w-100 d-flex my-2' type='text' placeholder='تاريخ انتهاء الكوبون ' style={{fontFamily:'El messiri'}}/>
<input onChange={copoondiscchange} value={copondiscount} className='button-55 w-100 d-flex my-2' type='number' placeholder='نسبه الخصم' style={{fontFamily:'El messiri'}}/>

      </div>        </Modal.Body>
        <Modal.Footer>
          <div className='button-55' style={{backgroundColor:'royalblue',color:'white',fontFamily:'El messsiri',fontWeight:'bold'}} onClick={handleCloseupdate}>
            Close
          </div>
          <div onClick={handleupdatesubmit} className='button-55' style={{backgroundColor:'black',color:'white',fontFamily:'El messsiri',fontWeight:'bold'}}>Update</div>
        </Modal.Footer>
      </Modal>

    {/* //////////////////////////////////////////////////////////////////////// */}

      <div className='button-2 w-100 my-4' >
<div className='d-flex justify-content-between'>
<p><span style={{color:'royalblue',fontFamily:'El messiri',fontWeight:'bold'}}>اسم الكوبون :{copon.name} </span></p>

<div className='d-flex'>
  <div onClick={handleShowdelete} className='mx-2'><img className='shakebtn'  src={deleteicon}/></div>
  <div onClick={handleShowupdate} className=''><img className='shakebtn'    src={updateion}/></div>
</div>



</div>

<div>
<p  className='justify-content-start d-flex w-100'><span style={{color:'royalblue',fontFamily:'El messiri',fontWeight:'bold'}}> تاريخ الانتهاء : {formatedate(datestring)}</span></p>
<p  className='justify-content-start d-flex w-100'><span style={{color:'royalblue',fontFamily:'El messiri',fontWeight:'bold'}}> نسبه الخصم : {copon.discount}  %</span></p>
</div>

</div>

<ToastContainer/>
    </div>
  )
}

export default AdminShowAllcopons
