import React, { useEffect, useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Get_All_Cat } from '../../Redux/Actions/CategoryAction';
import { Getallbrands } from '../../Redux/Actions/BrandsAction';
import plus from '../../images/add.png'
import {CompactPicker}from 'react-color'
import MultiImageInput from 'react-multiple-image-input';
import { Getallsubcatbycatid } from '../../Redux/Actions/SubcatAction';
import notify from '../utility/Notification';
import { ToastContainer } from 'react-toastify';
import { CreateNewProduct } from '../../Redux/Actions/ProductsAction';


const AdminAddProduct = () => {

    
  useEffect(()=>{
    if (!navigator.onLine) {
      notify("هناك مشكله فى الاتصال بالانترنت", "warn")
      return;
  }

  
  },[])

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch (Get_All_Cat());
    dispatch(Getallbrands());
  },[])
const category=useSelector(state=>state.allcategory.category)
const brand=useSelector(state=>state.all_brands.brands)

const [proname,setproname]=useState('');
const [desc,setdesc]=useState('')
const [pricebefore,setpricebefore]=useState()
const [priceafter,setpriceafter]=useState()
const [qty,setqty]=useState()
const [catid,setcatid]=useState('')
const [brandid,setbrandid]=useState('')
const [showcolor,setshowcolor]=useState(false)
const[colors,setcolors]=useState([])
const[images,setImages]=useState([])
const[options,setoptions]=useState([])
const[subcatidarray,setsubcatidarray]=useState([])
const[loading,setloading]=useState(true)

const catchange=async(e)=>{
  if(catid!==0)
  {
   await dispatch(Getallsubcatbycatid(e.target.value))
  }
  setcatid(e.target.value)

}

const subcat=useSelector(state=>state.subcategory.subcat)

useEffect(()=>{
  if(catid!==0)
  {
    if(subcat&&subcat.data)
    {
setoptions(subcat.data)
}
    
  }
},[catid])


const brandchange=(e)=>{
  setbrandid(e.target.value)
}

    const onSelect=(SelectedList)=>{
      setsubcatidarray(SelectedList)
    }
    
    
    const onRemove=(SelectedList)=>{
      setsubcatidarray(SelectedList)

    }

const handlecolorchoosed=(color)=>{
setcolors([...colors,color.hex])
  setshowcolor(!showcolor)
}


const removecolor=(color)=>{
const newcolor=  colors.filter((e)=>e!==color)
setcolors(newcolor)
}

const onpronamechange=(e)=>{
  setproname(e.target.value)
}

const ondescrchange=(e)=>{
  setdesc(e.target.value)
}

const onpricebeforechange=(e)=>{
setpricebefore(e.target.value)
}

const onpriceafterchange=(e)=>{
setpriceafter(e.target.value)
}

const onqtychange=(e)=>{
setqty(e.target.value)
}

//convert imagecover from base64 to file
function dataURLtoFile(dataurl, filename) {

  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

const handlesubmit=async(e)=>{
  

 


  if(proname===''||desc===''||pricebefore==''||qty==''||qty===0)
  {
    notify("من فضلك تاكد من انك قمت بادخال السعر قبل الخصم والكميه واسم المنت ووصف المنتج","error")
    return
  }
 else if(brandid==="0"||catid=="0"||brandid==""||catid=="")
  {
    notify("من فضلك اختر تصنيف للمنتج والبراند التابع للمنتج","warn")
    return;
  }
  else if(images.length<=0)
  {
    notify("يجب اختيار صوره واحده فقط ع الاقل","warn")
    return;
  }
 else if(colors.length<=0)
  {
    notify("يجب اختيار لون واحد للمنتج علي الاقل","warn")
    return;
  }
  else if(subcatidarray.length<=0)
  {
    notify("من فضلك اختر تصنيف فرعي للمنتج","warn")
    return;
  }
  else
  {

  

  const formatdata=new FormData();
  const imagecover=dataURLtoFile(images[0],Math.random()+".png")
  
  const imagesarray=Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>{
    return dataURLtoFile(images[index],Math.random()+".png")
  })



  
  formatdata.append("title",proname);
  formatdata.append("description",desc);
  formatdata.append("quantity",qty);
  formatdata.append("price",pricebefore);
  formatdata.append("imageCover",imagecover);
  formatdata.append("category",catid);
  formatdata.append("brand",brandid);
colors.map((color)=>formatdata.append("availableColors",color));
subcatidarray.map((item)=>formatdata.append("subcategory",item._id))
 imagesarray.map((image)=>formatdata.append("images",image))
setloading(true)
await dispatch(CreateNewProduct(formatdata))
setloading(false)
  }
}
const product=useSelector(state=>state.allproducts.product)

useEffect(()=>{
  if(loading===false)
  {
    if(product&&product.status===201)
    {
      notify("Done","success")
    }
    else
    {
      notify("هناك مشكله","error")
      return;
    }

    setproname('اسم المنتج')
    setqty('الكميه')
    setdesc('وصف المنتج')
    setbrandid('')
    setcatid('')
    setImages([])
    setcolors([])
    setsubcatidarray([])
    setpriceafter('السعر بعد الخصم')
    setpricebefore('السعر قبل الخصم')
  }
},[loading])


  return (
    <div  className='w-100 button-2 my-2 'style={{direction:'rtl'}}>
      <div style={{fontSize:'14px',fontFamily:'El messiri',color:'royalblue',fontWeight:'bold'}}  className='my-1 d-flex justify-content-start'>صوره المنتج</div>
      {/* <div  className=' d-flex justify-content-start '> */}
{/* <label for='image'>

<img src={Avatar} style={{width:'90px',height:'auto',cursor:'pointer'}} alt='Avatar'/>
<input id="image" type='file' hidden/>
</label> */}


      {/* </div> */}


      <MultiImageInput
      
      images={images}
      setImages={setImages}
      isCaption={false}
      max={5}
      theme={"light"}
      allowCrop={false}
    />
<input value={proname} onChange={onpronamechange} style={{fontFamily:'El messiri',color:'royalblue'}} className='button-55 w-100 my-2' type='text' placeholder='اسم المنتج'/>
<textarea value={desc} onChange={ondescrchange} style={{fontFamily:'El messiri',color:'royalblue'}} className='button-55 d-flex w-100 my-2 text-break' type='textarea' placeholder='وصف المنتج' />
<input value={pricebefore} onChange={onpricebeforechange} style={{fontFamily:'El messiri',color:'royalblue'}} className='d-flex button-55 w-100  my-2' type='number' placeholder='السعر قبل الخصم' min={0}/>
<input value={priceafter} onChange={onpriceafterchange} style={{fontFamily:'El messiri',color:'royalblue'}} className='button-55 w-100  my-2' type='number' placeholder='السعر بعد الخصم' min={0}/>
<input value={qty} onChange={onqtychange} style={{fontFamily:'El messiri',color:'royalblue'}} className='d-flex button-55 w-100  my-2' type='number' placeholder='الكميه' min={0}/>


<select   onChange={catchange}  style={{fontFamily:'El messiri'}} className='button-55 d-flex w-100'>
    <option value="0" style={{fontFamily:'El messiri'}} >اختر التصنيف</option>
  {
    category.data?(category.data.map((item,index)=>{return(

    <option key={item._id} value={item._id}>{item.name}</option>
    )})):null
  }
   

</select>

<Multiselect
options={options} // Options to display in the dropdown
// selectedValues={selectedValue} // Preselected value to persist in dropdown
onSelect={onSelect} // Function will trigger on select event
onRemove={onRemove} // Function will trigger on remove event
displayValue="name" // Property name to display in the dropdown options
className='my-2 w-100   '
/>


<select value={brandid} onChange={brandchange} style={{fontFamily:'El messiri'}} className='button-55 d-flex w-100 my-2'>
    <option value="0" style={{fontFamily:'El messiri'}}>اختر البراند</option>
    {
      brand.data?(brand.data.map((item,index)=>{return(
    <option key={index} value={item._id}>{item.name}</option>

      )})):null
    }
    

</select>


<div className='d-flex flex-wrap m-3'>
<div className='my-3 d-flex w-100  justify-content-start ' style={{color:'royalblue',fontFamily:'El messiri',fontSize:'14px'}}>اختر الللون :</div>


  {
  showcolor===true?(<CompactPicker   onChangeComplete={handlecolorchoosed} />):null
}

<div onClick={()=>setshowcolor(!showcolor)} className='mx-2 shakecolors ' style={{}}><img src={plus} style={{width:'50px',height:'55px'}}/></div>
{
  colors.length>=1?(colors.map((color)=>{return(
<div onClick={()=>(removecolor(color))} className='m-2 shakecolors' style={{backgroundColor:color}}></div>


)})):null

}
  
</div>
<div className='d-flex my-3 justify-content-start    justify-content-md-end '>
<button onClick={handlesubmit} class="btn btnsize "><i class="animation"></i> اضافه منتج<i class="fa-sharp fa-regular fa-plus fs-4"></i>  <i class="animation"></i>
    </button>
    </div>
    <ToastContainer/>
    </div>
  )
}

export default AdminAddProduct;
