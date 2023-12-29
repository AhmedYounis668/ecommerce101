import Multiselect from 'multiselect-react-dropdown'
import React, { useEffect, useState } from 'react'
import MultiImageInput from 'react-multiple-image-input'
import plus from '../../images/add.png'
import { useDispatch, useSelector } from 'react-redux'
import { GetOneProduct, UpdateOneProduct } from '../../Redux/Actions/ProductsAction'
import { useParams } from 'react-router-dom'
import { Get_All_Cat, Getonecategory } from '../../Redux/Actions/CategoryAction'
import { Getallbrands } from '../../Redux/Actions/BrandsAction'
import { CompactPicker } from 'react-color'
import { Getallsubcatbycatid } from '../../Redux/Actions/SubcatAction'
import notify from '../utility/Notification'
import { ToastContainer } from 'react-toastify'

const AdminUpdateProductComponent = () => {
const {id}=useParams();

  const dispatch=useDispatch()

  useEffect(()=>{
   
    const run=async()=>{
     await dispatch(GetOneProduct(id))
     await  dispatch(Get_All_Cat());
     await  dispatch(Getallbrands())
    }

    run()



},[])






const prodata=useSelector(state=>state.allproducts.oneproduct)

let item=[]
let imgs=[]
if(prodata&&prodata.data)
{
  item=prodata.data
   imgs=prodata.data.images
}
else 
{
  item=[]
   imgs=[]
}









 const allcat=useSelector(state=>state.allcategory.category)
const brands=useSelector(state=>state.all_brands.brands)

let allcategory=[]
if(allcat&&allcat.data)
{
  allcategory=allcat.data
}
else
{
  allcategory=[]
}


let allbrands=[]
if(brands&&brands.data)
{
  allbrands=brands.data
}
else
{
  allbrands=[]
}




    const[showcolors,setshowcolors]=useState(false)
    const[options,setoptions]=useState([])
    const[proname,setproname]=useState('')
    const[descr,setdesc]=useState('')
    const[pricebefore,setpricebefore]=useState(0)
    const[priceafter,setpriceafter]=useState(0)
    const[qty,setqty]=useState(0)
    const[catid,setcatid]=useState('')
    const[brandid,setbrandid]=useState('')
    const[colors,setcolors]=useState([])
    const[selectedsubcat,setselectedsubcat]=useState([])
    const[Images,setImages]=useState([])

    
useEffect(()=>{
 
  if(item)
  {

  
    setproname(item.title)
    setdesc(item.description)
  setpricebefore(item.price)
  setqty(item.quantity)
  setcatid(item.category)
  setbrandid(item.brand)
  setcolors(item.availableColors)

   if(item&&item.images)
  {

   setImages(imgs)
   }


  

  }

},[item])



const oncatidchange=(e)=>{
  setcatid(e.target.value)
}



useEffect(()=>{
  const run4=async()=>{
    if(catid!=0)
    {
     await dispatch(Getallsubcatbycatid(catid))
   
  }
  }
run4()

},[catid])

const subcat=useSelector(state=>state.subcategory.subcat)

let subcatdata=[]
if(subcat&&subcat.data)
{
subcatdata=subcat.data
}
else
{
subcatdata=[]
}


useEffect(()=>{
  if(subcat&&subcat.data)
  {

    setoptions(subcatdata)
  }

},[subcat])

    const onSelect=(SelectedList)=>{
      setselectedsubcat(SelectedList)
    }

    const onRemove=(SelectedList)=>{
      setselectedsubcat(SelectedList)
    }

    const handlecompactcolor=(color)=>{
      setcolors([...colors,color.hex])
      setshowcolors(!showcolors)
    }
    
    const removecolor=(color)=>{
   const newcolorsarray=colors.filter((e)=>e!==color)
   setcolors(newcolorsarray)
    }


const onbrandchange=(e)=>{
  setbrandid(e.target.value)
}

const onpronamechange=(e)=>{
setproname(e.target.value)
}


const ondescrchange=(e)=>{
  setdesc(e.target.value)
}


const onpriceafterchange=(e)=>{
  setpriceafter(e.target.value)
}

const onpricebeforechange=(e)=>{
  setpricebefore(e.target.value)
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


//convert url to file
const convertURLtoFile = async (url) => {
  const response = await fetch(url, { mode: "cors" });
  const data = await response.blob();
  const ext = url.split(".").pop();
  const filename = url.split("/").pop();
  const metadata = { type: `image/${ext}` };
  return new File([data], Math.random(), metadata);
};

const[loading,setloading]=useState(true)

    const updateproductsubmit=(e)=>{
         e.preventDefault();
         let imagecover;

if(Images[0].length<=1000)
{
  //url
  convertURLtoFile(Images[0]).then(val=> imagecover=val)
}
else
{
  imagecover=dataURLtoFile(Images[0],Math.random()+".png")

}
let imagesitem=[]

       Array.from(Array(Object.keys(Images).length).keys()).map((item,index)=>{
        if(Images[index].length<=1000)
        {
          //url
          convertURLtoFile(Images[index]).then(val=> imagesitem.push(val))

        }
        else
        {
        imagesitem.push( dataURLtoFile(Images[index],Math.random()+".png"))

        }
      })


      const formdata=new FormData();

    formdata.append("title",proname);
    formdata.append("description",descr);
    formdata.append("quantity",qty);
    formdata.append("price",pricebefore);
    formdata.append("category",catid);
    formdata.append("brand",brandid);   
    colors.map((color)=>{formdata.append("availableColors",color)})
    selectedsubcat.map((item)=>{formdata.append("subcategory",item._id)})
    
    setTimeout(() => {
      formdata.append("imageCover",imagecover);
      imagesitem.map((img)=>formdata.append("images",img))
    }, 1000)
    
    setTimeout(async() => {
      setloading(true)
      
      await dispatch(UpdateOneProduct(id,formdata))
      setloading(false)
    }, 1000)
    

  }

const res=useSelector(state=>state.allproducts.update_pro)
  useEffect(()=>{
    if(loading===false)
    {
      if(res&&res.status==200)
      {
notify("Updated Done","success")
setproname('')
setdesc('')
setImages([])
setbrandid('0')
setcatid('0')
setselectedsubcat([])
setqty('')
setpriceafter('')
setpricebefore('')
setcolors([])
      }
      else
      {
        notify("Error","error")
        return;
      }
    }
  },[loading])
  return (
    <div className='m-2'>

    <MultiImageInput
      images={Images}
      setImages={setImages}
      isCaption={false}
      max={5}
      theme={"light"}
      allowCrop={false}
    />
    <input onChange={onpronamechange} value={proname} type='text' className='button-55 w-100 my-2' placeholder='اكتب اسم المنتج'/>
    <input onChange={ondescrchange} value={descr} type='textarea' className='button-55 w-100 my-2' placeholder='وصف المنتج'/>
    <input onChange={onpricebeforechange} value={pricebefore} type='number' className='button-55 w-100 my-2' placeholder=' السعر قبل الخصم'/>
    <input onChange={onpriceafterchange} value={priceafter} type='number' className='button-55 w-100 my-2' placeholder=' السعر بعد الخصم'/>
    <input onChange={onqtychange} value={qty} type='number' className='button-55 w-100 my-2' placeholder='الكميه'/>


    <select value={catid}  onChange={oncatidchange} name='cat'   className='w-100 button-55'  >
        <option value="0">اختر التصنيف</option>
{
  allcategory?(allcategory.map((item,index)=>{return(
    <option value={item._id}  key={item._id} >{item.name} </option>

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

<select value={brandid} onChange={onbrandchange} className='w-100 button-55'>
        <option>اختر البراند</option>
        {
          allbrands?(allbrands.map((item)=>{return(

        <option value={item._id} key={item._id}>{item.name} </option>
          )})):null
        }
        

    </select>


<div className='my-4' style={{fontFamily:'El Messiri'}}>اختر اللون :</div>


<div className='d-flex mx-2'>

{
showcolors===true?(<CompactPicker onChangeComplete={handlecompactcolor} />):null

}
<div onClick={()=>setshowcolors(!showcolors)} className='mx-2 shakecolors ' style={{}}><img src={plus} style={{width:'50px',height:'55px'}}/></div>


{
colors?(colors.length>=1?(  colors?(colors.map((colors)=>{return(
    <div onClick={()=>removecolor(colors)}  style={{backgroundColor:colors}} className='m-2 colorcircle'></div>

  )})):null):<div className='d-flex  w-100' style={{textAlign:'center',fontFamily:'El Messiri',marginTop:'40px',color:'red'}}>لايوجد الوان تم اختيارها من قبل</div>):null  

}


</div>

<div className='d-flex justify-content-end'>
<button onClick={updateproductsubmit}  className="btn btnsize "><i class="animation"></i> تعديل المنتج<i class="fa-sharp fa-regular fa-plus fs-4"></i>  <i class="animation"></i></button>
</div>
<ToastContainer/>
    </div>
  )
}

export default AdminUpdateProductComponent
