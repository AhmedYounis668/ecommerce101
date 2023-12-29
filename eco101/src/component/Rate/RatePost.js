import React, { useEffect, useState } from 'react'
import rate from '../../images/rate.png'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { AddNewReview } from '../../Redux/Actions/ReviewsAction';
import notify from '../utility/Notification';
import { ToastContainer } from 'react-toastify';
import { GetOneProduct } from '../../Redux/Actions/ProductsAction';

const RatePost = ({id}) => {
  const dispatch=useDispatch();
  const[ratetext,setratetext]=useState('')
  const[ratevalue,setratevalue]=useState('')
 const[loading,setloading]=useState(true)
const ratetextchange=(e)=>{
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
      
   const  oncommentsubmit=async()=>{
setloading(true)
await dispatch(AddNewReview(id,{
  review: ratetext,
  rating: ratevalue
}))
setloading(false)
      }


      const res=useSelector(state=>state.allreviews.addreview)

      const randomheart=document.getElementById("randomheart")
      const heartcontainer2=document.getElementById("heartcontainer2")
      
      useEffect(()=>{
        if(loading===false)
        {
         
          if(res&&res.status===201)
          {
            notify("Done","success")
 setratetext('')
 setratevalue('')


const intervalheart= setInterval(() => {
const heart=document.createElement("div")
heart.style.left=`${Math.random()*100}%`
heart.classList.add("heart")
heart.innerHTML="&#x1F49A"
heartcontainer2.append(heart)    
}, 50);

setTimeout(() => {
clearInterval(intervalheart)

}, 3000)




setTimeout(() => {
  window.location.reload(false)
}, 4000);
          }

          else
          {
            notify("هناك مشكله","error")
            return;
          }
    
        
        }
      },[loading])

      var user=""
        if(localStorage.getItem("user")!=null)
        {
user=JSON.parse(localStorage.getItem("user"))
        }


        useEffect(()=>{
          dispatch(GetOneProduct(id))
        },[])

        const resproduct=useSelector(state=>state.allproducts.oneproduct)

        let respro=[]
        if(resproduct&&resproduct.data)
        {
          respro=resproduct.data
        }
        else
        {
          respro=[]
        }
 

      

  return (
    <div className='my-2 mx-2'>
            <p style={{fontFamily:'El messiri',fontWeight:'bold',color:'red'}}>التقيمات : <span>{respro.ratingsAverage} <img src={rate} alt='rate' style={{width:'20px',marginTop:'-8px'}} className='mx-2'  /></span><span style={{fontFamily:'El messiri',fontWeight:'bold'}}>( { respro.ratingsQuantity } )  تقيم </span></p>

              <div className='d-flex '>
             <p style={{fontWeight:'bold',fontSize:'20px',color:'rosybrown'}} className='mx-3'>{user.name}</p>
            <ReactStars {...secondExample} />
            </div>


<input value={ratetext} onChange={ratetextchange} type='textarea' for="comment" className='form-control w-100 ' placeholder='Write Comment' style={{height:'40px'}}/>
<div className=' d-flex justify-content-end my-2'>
{/* <button  class="btn"><i class="animation"></i> <i class="fa-solid fa-plus fs-4"></i>Add Comment</button> */}
    
<button id="randomheart" onClick={oncommentsubmit} class="btn2 w-100" type="button">
  <strong><i class="fa-solid fa-plus fs-4 "></i> Add Comment</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle2"></div>
    <div class="circle2"></div>
  </div>
</button>

    
    
    
    
    
    
    </div>
    <ToastContainer/>
    </div>
  )
}

export default RatePost
