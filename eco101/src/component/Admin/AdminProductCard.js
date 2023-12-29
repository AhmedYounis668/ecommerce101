import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import rate from '../../images/rate.png'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer } from 'react-toastify';
import AdminDeleteproduct from '../../hook/products/AdminDeleteproduct';

const AdminProductCard = ({prodata}) => {
  
  const [ConfirmDelete,show,handleClose,handleShow]=AdminDeleteproduct(prodata)
  return (


<div>


    <Card className='my-3 animate2 ' style={{height:'325px',marginRight:'15px'}}>
    <div className='d-flex justify-content-between'>

    <div className='mx-2 text-center '>
    <div className='d-flex ' style={{position:'absolute',marginTop:'4px'}}>{prodata.ratingsQuantity}</div>
    <img src={rate} alt='rate' style={{width:'20px'}} className='mx-4' />
    </div>


   

    </div>
    <Link to="/product/:id">
      <Card.Img variant="top" src={prodata.imageCover} style={{height:'200px'}}/>
      </Link>
      <Card.Body >
        <Card.Title style={{textAlign:'center',color:'red'}}>{prodata.title}</Card.Title>
       <span style={{color:'red'}}>{prodata.price} جنيه</span>

<div className='d-flex justify-content-between'>
<Link to={`/Adminupdateproductpage/${prodata._id}`}>
<div><i class="fa-solid fa-pen-to-square deleteandupdateiconhover"></i></div>
</Link>
  <div onClick={handleShow}><i class="fa-solid fa-trash deleteandupdateiconhover"></i></div>
</div>
 
     
      </Card.Body>

      {/* //to delete product */}

      <div>


      <Modal show={show} onHide={handleClose} style={{textAlign:'center'}} >
          <Modal.Title className='my-2'>تاكيد الحذف</Modal.Title>
        <Modal.Body>هل انت متاكد من حذف هذا المنتج ؟</Modal.Body>
        <Modal.Footer style={{textAlign:'center'}}>
        
        <div className='button-55' onClick={ConfirmDelete} style={{textAlign:'center',fontFamily:'El messiry'}} >
            Confirm Delete
          </div>
        
          <div className='button-55'  onClick={handleClose} style={{textAlign:'center',backgroundColor:'yellow',fontFamily:'El messiry'}}>
            Close
          </div>
         
        </Modal.Footer>
      </Modal>
      </div>
    </Card>



    <ToastContainer/>

</div>
  )
}

export default AdminProductCard
