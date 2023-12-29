import React, { useEffect, useState } from 'react'
import {useDispatch,  useSelector } from 'react-redux'
import { Get_All_Cat } from '../../Redux/Actions/CategoryAction';
import { createnewsubcat } from '../../Redux/Actions/SubcatAction';
import { ToastContainer } from 'react-toastify';
import notify from '../utility/Notification';
const AdminAddSubCategoryComponent = () => {

  const[id,setid]=useState(0)
  const[name,setname]=useState('')
  const[loading,setloading]=useState(true)

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(Get_All_Cat())
  },[])

  const Category=useSelector(state=>state.allcategory.category);

  const onselectcatchange=(e)=>{
    e.persist();
setid(e.target.value)
  }

  const onnamechange=(e)=>{
    e.persist();
    setname(e.target.value)
  }

  const handlesubmit=async(e)=>{
    if(name==="")
    {
      notify("please complete and write the name","warn")
      return;
    }
     if(id===0)
    {
      notify("choose category please","error")
      return;
    }
    e.preventDefault();
setloading(true)
await dispatch(createnewsubcat({
  name:name,
  category:id}))
setloading(false)
  }

  const res=useSelector(state=>state.subcategory.subcat)
  useEffect(()=>{
if(loading===false)
{
setname('')
setid("0")

if(res.status===201)
{
  notify("Done","success")


}
}
  },[loading])
  return (
    <div className='button-2 w-100 my-2'>
      <input value={name} onChange={onnamechange} className='form-control w-100' type='text' placeholder='ادخل اسم التصنيف الفرعي هنا ...'/>
      
      <select  className='form-control my-3' onChange={onselectcatchange}>
        <option value="0"   className='form-control'  >Choose Category</option>
        {
         Category.data?(Category.data.map((item)=>
          {
            return(
        <option key={item._id} value={item._id}>{item.name}</option>

          )})):null
        }
      

      </select>

      <div className='d-flex my-3 justify-content-start   justify-content-md-end '>
<button onClick={handlesubmit} class="btn btnsize"><i class="animation"></i> اضافه تصنيف فرعي<i class="fa-sharp fa-regular fa-plus fs-4"></i>  <i class="animation"></i>
    </button></div>
    <ToastContainer/>
    </div>
  )
}

export default AdminAddSubCategoryComponent
