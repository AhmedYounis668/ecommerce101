import React, { useEffect, useState } from 'react'
import ViewProductsinHomeProductDetails from '../products/ViewProductsinHomeProductDetails'

const NavbarSearchHook = () => {
    const [items,getproducts]=ViewProductsinHomeProductDetails();
     
const[searchword,setsearchword]=useState('')
const onsearchchange=(e)=>{
    localStorage.setItem("searchword",e.target.value)
    setsearchword(e.target.value)
   
   const path=window.location.pathname;
    if(path!="/searchpage")
    {
window.location.href="/searchpage"
    }

}

useEffect(()=>{
    
    setTimeout(() => {
      
        getproducts();

    }, 1000)
    document.getElementById("navv").focus();

},[searchword])

return[onsearchchange,searchword]
}

export default NavbarSearchHook
