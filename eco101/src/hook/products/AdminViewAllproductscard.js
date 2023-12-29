import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_Products_Data, Get_Products_Data_page } from '../../Redux/Actions/ProductsAction'

const AdminViewAllproductscard = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(Get_Products_Data(8))
  },[])

  const allproducts=useSelector(state=>state.allproducts.allproducts)
console.log(allproducts)
  let items=[]

  if(allproducts&&allproducts.data)
  {
    items=allproducts.data
  }
  else
  {
    items=[]
  }


  var pagecount=[]
   if(allproducts&&allproducts.paginationResult)
   {
    pagecount=allproducts.paginationResult.numberOfPages
   }
   else
   {
    pagecount=[]
   }

   const getdata=(page)=>{
    dispatch(Get_Products_Data_page(8,page))
   }
  return[items,pagecount,getdata]
}

export default AdminViewAllproductscard
