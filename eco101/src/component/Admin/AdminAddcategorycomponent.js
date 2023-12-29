import React from 'react'
import CategouryHomehook from '../../hook/CategouryHomehook'
import { ToastContainer } from 'react-toastify';

const AdminAddcategorycomponent = () => {

  const [img,name,onnamechange,onaddsubmit,onchangeimg]=CategouryHomehook();
 
  return (
    <div className='button-2 m-2 w-100 '>
    <div className='d-flex'>
    <label  for='upload-image'>
      <img src={img} alt='avatar' for='f'  style={{width:'110px' ,height:'100px',borderRadius:'15px',cursor:'pointer'}}/>
    <input  onChange={onchangeimg} type='file' id='upload-image' hidden/>
      </label>
</div>

 <div className='d-flex my-3 w-100 '>

      <input value={name} onChange={onnamechange} type='text' placeholder='ادخل اسم التصنيف هنا .....' className='form-control  w-100' style={{fontFamily:'El messiri'}}/>
</div> 







<div className='d-flex my-3 justify-content-start   justify-content-md-end '>
<button onClick={onaddsubmit} class="btn btnsize"><i class="animation"></i> اضافه تصنيف<i class="fa-sharp fa-regular fa-plus fs-4"></i>  <i class="animation"></i>
    </button></div>
    <ToastContainer/>
    </div>
  )
}

export default AdminAddcategorycomponent
