import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProductsSearchAction, Get_Products_Data } from '../../Redux/Actions/ProductsAction';
import SidbarSearshHook from '../search/SidbarSearshHook';

const ViewProductsinHomeProductDetails = () => {
  

 const dispatch=useDispatch();


 let word="";
 let catquery="";
 let brandquery="";
 let pfrom="",pto=""
 let pricefromstring="",pricetostring="";
 let limit=6;
const getproducts=async()=>{
    getsomevariableforsearch()
   sortdata();
   await dispatch(GetAllProductsSearchAction(`sort=${sort}&limit=${limit}&keyword=${word}&${catquery}&${brandquery}${pricefromstring}${pricetostring}`))

 }
 useEffect(()=>{
   getproducts();
    },[])

 const product=useSelector(state=>state.allproducts.allproducts)

 let items=[]

 if(product&&product.data)
 {
    items=product.data
  }






 let pagecount=[];
 try
 {
  if(product&&product.paginationResult)
  {
   pagecount=product.paginationResult.numberOfPages;
  }
  else
  {
   pagecount=[]
  }
}
catch(e)
{

}
 const getdata=async(page)=>{

    getsomevariableforsearch()
   sortdata();
      await dispatch(GetAllProductsSearchAction(`sort=${sort}&limit=${limit}&keyword=${word}&page=${page}&${catquery}&${brandquery}${pricefromstring}${pricetostring}`))
 }



const getsomevariableforsearch=()=>{
  
   if(localStorage.getItem("searchword")!=null)
   {
      word=localStorage.getItem("searchword")
   }

   if(localStorage.getItem("catquery")!=null)
    {
        catquery=localStorage.getItem("catquery")
    }

    if(localStorage.getItem("brandquery")!=null)
    {
        brandquery=localStorage.getItem("brandquery")
    }
 
    if(localStorage.getItem("pricefrom")!=null)
    {
     pfrom=localStorage.getItem("pricefrom")
    }


    if(localStorage.getItem("priceto")!=null)
    {
    pto=localStorage.getItem("priceto")
    }

if(pfrom===""||pfrom<=0)
{
pricefromstring=""
}
else
{
pricefromstring=`&price[gt]=${pfrom}`
}


if(pto===""||pto<=0)
{
pricetostring=""
}
else
{
pricetostring=`&price[lte]=${pto}`
}
}

 let sorttype=""
 let sort=""

 const sortdata=()=>{
     if(localStorage.getItem("keyword")!==null)
     {
 
         sorttype=localStorage.getItem("keyword")
     }
     else
     {
         sorttype=""
     }
 
     if(sorttype==="من الاعلي سعرا الي الاقل")
     {
 sort="-price"
     }
     else if(sorttype==="من الاقل سعرا الي الاعلي")
     {
      sort="+price"
     }
     else if(sorttype==="بدون ترتيب")
     {
      sort=""
     }
     else if(sorttype==="الاعلي تقيما")
     {
      sort="-quantity"
     }



 }
 return[items,getproducts,pagecount,getdata]
}

export default ViewProductsinHomeProductDetails
