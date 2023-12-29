import React,{useEffect} from 'react'
import {useDispatch,useSelector}from 'react-redux'
import { Getallbrands, getbrandswithpage } from '../Redux/Actions/BrandsAction';
const BrandHomeHook = () => {
 
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch (Getallbrands(10))
    },[])
    
    const brandres=useSelector(state=>state.all_brands.brands)
    const loading=useSelector(state=>state.all_brands.loading)

    let pagecount;
    if(brandres&&brandres.paginationResult)
    {
      pagecount=brandres.paginationResult.numberOfPages;
    }


    const getpage=(page)=>{
      dispatch(getbrandswithpage(10,page))
    }
    return[brandres,loading,pagecount,getpage]
}
export default BrandHomeHook
