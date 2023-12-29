import React, { useEffect, useState } from 'react'
import rate from '../../images/rate.png'
import { useParams } from 'react-router-dom'
import GetOneProductData from '../../hook/products/GetOneProductData'
import { useDispatch, useSelector } from 'react-redux'
import { createaddtocard } from '../../Redux/Actions/CardAction'
import notify from '../utility/Notification'
import { ToastContainer } from 'react-toastify'

const ProductText = () => {
  const dispatch=useDispatch();
  const{id}=useParams()
  const[oneproduct,images,cat,onebrandd]=GetOneProductData(id);

  const[colorindex,setindexcolor]=useState('')
  const[colortext,setcolortext]=useState('')
const[loading,setloading]=useState(true)
  const clickcolor=(color,index)=>{
setindexcolor(index)
setcolortext(color)
  }
  console.log(colortext)
  const handleaddtocard=async()=>{

    if(oneproduct&&oneproduct.availableColors.length>=1)
    {
  if(colortext==="")
        {
            notify("من فضلك اختر لون المنتج","error");
            return;
        
    }else
    {
        setcolortext('')
    }
       
    setloading(true)

await dispatch(createaddtocard({
  productId: id,
  color:colortext,
}))

setloading(false)
  }
}
  const res=useSelector(state=>state.allcart.addtocart)

  useEffect(()=>{
if(loading===false)
{
if(res&&res.status===200)
{
  notify("product added to cart successfully","success")
  setTimeout(() => {
     window.location.reload(false)
  }, 5000)
  
}
else{
  notify("Error","error")
  return;
}
}
  },[loading])
  console.log(res)
  return (
    <div  className='galaryshadow'>
      <div className='button-2  w-100 text-center'>بيانات المننتج</div>
      <p style={{fontFamily:'El messiri',fontWeight:'bold'}} className='m-2 producttextcolor1'>تصنيف المنتج : <span className='producttextcolor2'>{cat.name}</span></p>
      <p style={{fontFamily:'El messiri',fontWeight:'bold'}} className='m-2 producttextcolor1'>وصف المنتج : <span className='producttextcolor2'>{oneproduct.description} </span></p>
      <p style={{fontFamily:'El messiri',fontWeight:'bold'}} className='m-2 producttextcolor1'>تقيم المنتج : <span className='producttextcolor2'> {oneproduct.ratingsQuantity}   <img src={rate} alt='rate' style={{width:'20px',marginTop:'-8px'}} className='mx-2'  /></span></p>
      <p style={{fontFamily:'El messiri',fontWeight:'bold'}} className='m-2 producttextcolor1'> الماركه : <span className='producttextcolor2'>  {onebrandd.name} </span></p>


      <div className='d-flex mx-2'>
      <p style={{fontFamily:'El messiri',fontWeight:'bold'}} className='my-3  producttextcolor1'> الالوان المتاحه : </p>

      {
        oneproduct.availableColors?(oneproduct.availableColors.map((color,index)=>{return(
          <div key={index} onClick={()=>clickcolor(color,index)}  className='galaryshadow mx-2 colors' style={{backgroundColor:color,borderRadius:'50%',border:colorindex===index?'1px solid black':'none',cursor:'pointer'}}></div>

        )})):null

      }
      
      </div>

      <p style={{fontFamily:'El messiri',fontWeight:'bold'}} className='m-2 producttextcolor1'> تعليمات مابعد البيع للمنتج : <span className='producttextcolor2'> يمكن استرجاع المنتج بعد 99 يوم بشرط ان يكون بحاله جيده واسترجاع كل المصاريف ماعدا مصاريف الشحن فقط --يجب ترك تعليق علي المنتج اذا كان سئ لتحسين الخدمه بعد ذلك او ترك تعليق للمنتج اذا كان جيد بالنسبه لك لتوفير خدمات افضل من الحاليه ودعمنا لتوفير المزيد </span></p>
    
      <div className='button-2  w-100 '>
      <div className='d-flex justify-content-between mx-3'> 

      <div style={{fontFamily:'El messiri',fontWeight:'bold'}} className='button-2'>  السعر : L.E <span>{oneproduct.price}</span></div>

      <div>
    <button onClick={handleaddtocard} class="btn"><i class="animation"></i><i class="fa-solid fa-cart-shopping fs-4"></i>Add To Card <i class="animation"></i>
    </button>
</div>
          </div>
       </div>
    </div>
  )
}

export default ProductText
