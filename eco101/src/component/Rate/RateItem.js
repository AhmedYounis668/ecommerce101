import React, { useEffect, useState } from 'react'
import rate from '../../images/rate.png'
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deletecommentaction, updatecommentaction } from '../../Redux/Actions/ReviewsAction';
import notify from '../utility/Notification';
import { ToastContainer } from 'react-toastify';
import Pagination from '../utility/Pagination';
import ReactStars from "react-rating-stars-component";

const RateItem = ({item,userid}) => {

  const dispatch=useDispatch();
  const[isuser,setisuser]=useState(false)
  let user=""
  if(localStorage.getItem("user")!=null)
  {
user=JSON.parse(localStorage.getItem("user"))
  }


    useEffect(()=>{
      setTimeout(() => {
        if(item&&item.user._id)
        {
          if(item.user._id===user._id)
          {
          setisuser(true)
          }
        }
      }, 4000)
      
    },[])


    const[handledeleteshow,sethandledeleteshow]=useState(false)
    const[handledeleteclose,sethandledeleteteclose]=useState(false)

    const[handleupdateshow,sethandleupdateshow]=useState(false)
    const[handleupdateclose,sethandleupdateclose]=useState(false)

    const[loading,setloading]=useState(true)
    const deletecomment=async()=>{
setloading(true)
await dispatch(deletecommentaction(item._id))
setloading(false)
sethandledeleteshow(false)
    }


    const res=useSelector(state=>state.allreviews.deletecomment)

useEffect(()=>{
  if(loading===false)
  {
    if(res==="")
    {
      
        notify("Deleted Done","success")

        setTimeout(() => {
          window.location.reload(false)
        }, 3000);
      }
      else{
        notify("Error","error")
        return;
      }
 
    
  }
},[loading])





//update
const[ratevalue,setratevalue]=useState(item.rating)
const[ratetext,setratetext]=useState(item.review)

const oncommenttextchange=(e)=>{
  setratetext(e.target.value)
}

const onratevaluechange=(val)=>{
  setratevalue(val)
}
  const secondExample = {
      size: 20,
      count: 6,
      color:"black",
      activeColor: "#FFA500",
      value: ratevalue,
      a11y: true,
      isHalf: true,
      emptyIcon: <i className="far fa-star" />,
      halfIcon: <i className="fa fa-star-half-alt" />,
      filledIcon: <i className="fa fa-star" />,
      onChange: newValue => {
        onratevaluechange(newValue)
      }
    };
    


    const[loadingupdate,setloadingupdate]=useState(true)

    const updatemodalopen=()=>{
      sethandleupdateshow(true)
    }


    const updatecomment=async()=>{
      if(ratevalue===""||ratevalue===0)
      {
        notify("من فضلك اختار تقيم للمنتج قبل التعديل","warn")
        return;
      }
      else if(ratetext==="")
      {
        notify("من فضلك اكتب التعديل ولاتترك التعديل فارغ اذا كنت تريد مسحه فاستخدم اداه الdelete","error")
     return;
      }
setloadingupdate(true)
await dispatch(updatecommentaction(item._id,{
review:ratetext,
rating:ratevalue,
}))
setloadingupdate(false)
}
console.log(item)
    const resupdate=useSelector(state=>state.allreviews.updatecomment)
    useEffect(()=>{
      if(loadingupdate===false)
      {
        if(resupdate&&resupdate.status===200)
        {
          console.log(resupdate)
        notify("data updated","success")
        setTimeout(() => {
          window.location.reload(false)
        }, 4000)
        sethandleupdateshow(false)
    
  }
  else{
    notify("Error","error");
    return;
  }
        
      }
    },[loadingupdate])



  return (
    <div>


{/* delete modal */}


<Modal show={handledeleteshow} onHide={handledeleteclose}>
        <Modal.Header >
          <Modal.Title style={{textAlign:'center'}}>Delete Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>Do You Sure That You Want To Delete Your Comment ?</Modal.Body>
        <Modal.Footer>
          <div style={{fontFamily:'El Messiri',fontWeight:'bold',backgroundColor:'yellow'}} className='button-55' onClick={()=>sethandledeleteshow(false)}>
            Close
          </div>
          <div className='button-55' style={{fontFamily:'El Messiri',fontWeight:'bold',backgroundColor:''}} onClick={deletecomment}>
            Delete
          </div>
        </Modal.Footer>
      </Modal>


{/* //update modal */}
<Modal show={handleupdateshow} onHide={handleupdateclose}>
        <Modal.Header >
          <Modal.Title style={{textAlign:'center'}}>Do you sure that you want to update your Comment ?</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center'}}>        
            <ReactStars {...secondExample} />
            <input id='ratetextid' className='button-55 w-100' style={{textAlign:'center',fontFamily:'El Messiri'}} type='text' value={ratetext} onChange={oncommenttextchange}  />
</Modal.Body>
        <Modal.Footer>
          <div style={{fontFamily:'El Messiri',fontWeight:'bold',backgroundColor:'yellow'}} className='button-55' onClick={()=>sethandleupdateshow(false)}>
            Close
          </div>
          <div className='button-55' style={{fontFamily:'El Messiri',fontWeight:'bold',backgroundColor:''}} onClick={updatecomment}>
            Update Comment
          </div>
        </Modal.Footer>
      </Modal>


    <div className='col-12 button-2 fs-5 my-2 ' style={{border:'2px solid royalblue'}}>
      <div className='d-flex'>
        <div className='m-2'>{item.user.name}</div>
        <div className='m-2'> <span>{item.rating}<img src={rate} alt='rate' style={{width:'20px',marginTop:'-8px'}} className='mx-2'  /></span>  </div>
      
      </div>

<div className=' '>

      <div className='mx-2 ' style={{fontSize:'15px',textAlign:'right',fontWeight:'bold',overflowY:'scroll'}} >{item.review} </div>

{
  isuser===true?(<div className='d-flex justify-content-end mx-2'>
  <div onClick={updatemodalopen}  style={{cursor:'pointer'}} className='mx-3 updateanddeletico my-2'><i  class="fa-regular fa-pen-to-square "></i></div>
<div onClick={()=>sethandledeleteshow(true)} style={{cursor:'pointer'}} className='updateanddeletico my-2'><i class="fa-solid fa-trash"></i></div>
</div>):null
}



</div>

    </div>

<ToastContainer/>
</div>


 
  )
}

export default RateItem
