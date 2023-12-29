import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { Get_All_Cat } from '../../Redux/Actions/CategoryAction';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CategouryHeader = () => {

  let limit=10;
  const dispatch=useDispatch();

  useEffect(()=>{
    const getallcat=async()=>{
await dispatch(Get_All_Cat(limit))
    }
    getallcat();
  },[])

    const res=useSelector(state=>state.allcategory.category)
const [cat,setcat]=useState([])
    if(res&&res.data)
    {
      setTimeout(() => {
        
        setcat(res.data)
        console.log(cat)
      }, 3000)
      
    }
    


  return (
    <div style={{marginTop:'120px'}} >
      {
        cat?(cat.map((item,index)=>{return(
          <Link to={`/Productsbyonecatsearch/${item._id}`}>
          <div  className='button-2 m-2' key={index}>{item.name}</div>
          </Link>
        )})):null
      }
      


        <a href='/categoury' style={{textDecoration:'none',fontFamily:'El messiri',fontWeight:'bold',color:'royalblue'}} className='button-2'>المزيد...</a>

     </div> 
  )
}

export default CategouryHeader
