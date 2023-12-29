import React, { useEffect, useState } from 'react'
import Avatar from'../../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { insertbrand } from '../../Redux/Actions/BrandsAction'
import notify from '../utility/Notification'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AdminAddBrandComponent = () => {
  const dispatch=useDispatch()
const [img,setimg]=useState(Avatar)
const [name,setname]=useState('')
const[loading,setloading]=useState(true)
const[selectedfile,setselectedfile]=useState('')

const onimgchange=(e)=>{
if(e.target.files&&e.target.files[0])
{
  setimg(URL.createObjectURL(e.target.files[0]))
  setselectedfile(e.target.files[0])
}

}



const onchangename=(e)=>{
  setname(e.target.value)
}


const onclicksubmit=async()=>{
  if(name==='')
  {
    notify("please compleate data and enter the name of brand !","error")
    return;
  }
  else if(selectedfile==='')
  {
    notify("please choose photo","error")
    return;
  }

  const formdata=new FormData();
  formdata.append("name",name)
  formdata.append("image",selectedfile)
  setloading(true)
  await dispatch(insertbrand(formdata))
  setloading(false)
}

const res=useSelector(state=>state.all_brands.brands)
useEffect(()=>{
 if(loading===false){

  setname('')
  setselectedfile('')
  setimg('')
  setimg(Avatar)
  
  if(res&&res.status===201)
  {
    notify("Done","success")
  }
  console.log(res)

  }
},[loading])
  return (
    <div className='button-2 my-2 w-100 justify-conmtent-start '>
    <div className='d-flex justify-content-start'>
    <label for="image">
      <img src={img} alt='Avatar' style={{width:'150px',height:'120px',cursor:'pointer',borderRadius:'15px'}} />
      <input onChange={onimgchange} id="image" type='file' style={{opacity:'0'}} />
      </label>
</div>

<div className='w-100'>
      <input  onChange={onchangename} value={name} type='text' className='w-100 form-control my-2' placeholder='اضف اسم الماركه هنا...'/>
      </div>

    <div className='d-flex my-3 justify-content-start   justify-content-md-end '>
<button onClick={onclicksubmit} class="btn btnsize"><i class="animation"></i> اضافه ماركه<i class="fa-sharp fa-regular fa-plus fs-4"></i>  <i class="animation"></i>
    </button>
    </div>

    <ToastContainer />

    </div>
  )
}

export default AdminAddBrandComponent
