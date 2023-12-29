


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_Products_Data } from '../../Redux/Actions/ProductsAction'

const Getallproducts = () => {
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(Get_Products_Data(4))
},[])


const allproducts=useSelector(state=>state.allproducts.allproducts)


let items=[]

if(allproducts&&allproducts.data)
{
    items=allproducts.data
}
return[items]
}

export default Getallproducts
