import React,{useState,useEffect} from 'react'
import avatar from '../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { insertcategory } from '../Redux/Actions/CategoryAction';
import notify from '../component/utility/Notification';
const CategouryHomehook = () => {
    const dispatch=useDispatch();
    const[img,setimg]=useState(avatar)
  const[name,setname]=useState('')
  const[selectedfile,setselecetedfile]=useState('')
  const[loading,setloading]=useState(true)
    const onchangeimg=(e)=>{
      e.persist();
      if(e.target.files&&e.target.files[0])
      {

        setimg(URL.createObjectURL(e.target.files[0]))
        setselecetedfile(e.target.files[0])
      }
    }
  
    const onnamechange=(e)=>{
      e.persist();
      setname(e.target.value)
    }
  
    const onaddsubmit=(e)=>{
      if(selectedfile==='')
      {
        notify("please choose photo","error")
        return;
      }
      else if(name==='')
      {
        notify("please enter the name of category","error")
        return;
      }
  e.preventDefault();
  
  const formdata=new FormData();
  formdata.append("name",name)
  formdata.append("image",selectedfile)
  setloading(true)
  dispatch(insertcategory(formdata))
  setloading(false)
    }
  
  
   const res=useSelector(state=>state.allcategory.category)
  
    useEffect(()=>{
     if(loading==false)
      {
  setname('')
  setimg(avatar)
  setselecetedfile('')
  if(res.status===201)
  {
    notify("Done","success")
  }
      }
    },[loading])

    return[img,name,onnamechange,onaddsubmit,onchangeimg]
}

export default CategouryHomehook
