import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import notify from '../../component/utility/Notification';
import { Deleteproduct } from '../../Redux/Actions/ProductsAction';

const AdminDeleteproduct = (prodata) => {

    const dispatch=useDispatch();

    const [show, setShow] = useState(false);
    const [loading, setloading] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    const ConfirmDelete=async()=>{
  
     await dispatch(Deleteproduct(prodata._id))
     setloading(false)
     setShow(false)
     
     
    }
 
    if(loading===false)
    {
  
      notify("Done","success")
      setTimeout(() => {
        
        window.location.reload();
      }, 5000)
      
    }

    return[ConfirmDelete,show,handleClose,handleShow]
}

export default AdminDeleteproduct
