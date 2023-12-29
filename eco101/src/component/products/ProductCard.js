import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import img from '../../images/tasnef5.webp'
import favoff from '../../images/fav-off.png'
import favon from '../../images/fav-on.png'
import rate from '../../images/rate.png'
import { Link } from 'react-router-dom';
import { addtowishlistaction, getallwishlistaction, removefromwishlist } from '../../Redux/Actions/WishlistAction';
import {useDispatch, useSelector}from 'react-redux'
import { ToastContainer } from 'react-toastify';
import notify from '../utility/Notification';


const ProductCard = ({item,favpro}) => {
  const URL="http://127.0.0.1:8000/products/";

  let fav=favpro.some(fitem=>fitem===item._id)
console.log(favpro)
  const dispatch=useDispatch();
  const[favimg,setfavimg]=useState(favoff)
   const[isfav,setisfav]=useState(fav)
const[loadingadd,setloadingadd]=useState(true)
const[loadingremove,setloadingremove]=useState(true)

useEffect(() => {
  setisfav(favpro.some(fitem => fitem === item._id))
}, [fav])
const handlefav=()=>{
  if(isfav)
  {
    removeformwishlist();

  }
  else
  {
    addtowishlist();

  }
}

useEffect(()=>{
  if(isfav===true)
  {
setfavimg(favon)
  }
  else
  {
    setfavimg(favoff)

  }
},[isfav])


const randomheart=document.getElementById("randomheart")
const heartcontainer2=document.getElementById("heartcontainer2")

  const addtowishlist=async()=>{
    const intervalheart= setInterval(() => {
      const heart=document.createElement("div")
      heart.style.left=`${Math.random()*100}%`
      heart.classList.add("heart")
      heart.innerHTML="&#x1F49A"
      heart.style.fontSize="40px"
      heart.style.zIndex="40"

      heartcontainer2.append(heart)    
      }, 50);
      
      setTimeout(() => {
      clearInterval(intervalheart)
      
      }, 3000)



    setisfav(true)
    setfavimg(favon)
    setloadingadd(true)
    await dispatch(addtowishlistaction({
      productId: item._id,

    }))
    setloadingadd(false)
    
  }

  const resadd=useSelector(state=>state.allwishlist.AddWishlist)


  useEffect(()=>{
    if(loadingadd===false)
    {
      if(resadd&&resadd.status===200)
      {
        notify("Favurate Product Added To Wishlist","success");
      }
console.log(resadd)    
}
  },[loadingadd])



  const removeformwishlist=async()=>{


    const intervalheart= setInterval(() => {

      const heart=document.createElement("div")
      heart.style.left=`${Math.random()*100}%`
      heart.classList.add("heart")
      heart.innerHTML="&#128532"
      heart.style.fontSize="40px"
      heart.style.zIndex="40"

      heartcontainer2.append(heart)    
      }, 50);
      
  
      
    setTimeout(() => {
    clearInterval(intervalheart)
    
    }, 2000)
  


    setisfav(false)
    setfavimg(favoff)
setloadingremove(true)
await dispatch(removefromwishlist(item._id))
setloadingremove(false)
  }
const resremove=useSelector(state=>state.allwishlist.RemoveWishlist)
  useEffect(()=>{
    if(loadingremove===false)
    {
      console.log(resremove,"rem")
      if(resremove&&resremove.status==="success")
      {console.log(resremove)
        notify("Favurate Product Removed To Wishlist","warn");
      }    
    }
  },[loadingremove])




  return (
    <div>
    <Card className='my-3 animate2' style={{height:'300px'}}>
    <div className='d-flex justify-content-between'>

    <div className='mx-2 text-center'>
    <div className='d-flex ' style={{position:'absolute',marginTop:'4px'}}>{item.ratingsQuantity}</div>
    <img src={rate} alt='rate' style={{width:'20px'}} className='mx-4' />
    </div>

    <div onClick={handlefav}>
    <img src={favimg} alt='fav' style={{width:'30px'}} />
    </div>

   

    </div>
    <Link to={`/product/${item._id}`}>
      <Card.Img variant="top" src={item.imageCover} style={{height:'200px'}}/>
      </Link>
      <Card.Body >
        <Card.Title style={{textAlign:'center',color:'#54ff9f'}}>{item.title}</Card.Title>
       <span style={{color:'#54ff9f',fontFamily:'El messiri'}}>{item.price} جنيه</span>
      </Card.Body>
      
    </Card>
    <ToastContainer />


    <div id="heartcontainer2">
    </div>






    </div>
  )
}

export default ProductCard
