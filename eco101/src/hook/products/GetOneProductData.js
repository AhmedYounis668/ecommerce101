import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetOneProduct, GetProductsLike } from '../../Redux/Actions/ProductsAction';
import Avatar from '../../images/avatar.png'
import { Getonecategory } from '../../Redux/Actions/CategoryAction';
import { Getonebrand } from '../../Redux/Actions/BrandsAction';

const GetOneProductData = (id) => {
const dispatch=useDispatch();

useEffect(()=>{
    dispatch(GetOneProduct(id))
},[])

const onepro=useSelector(state=>state.allproducts.oneproduct)

let oneproduct=[];

if(onepro&&onepro.data)
{
    oneproduct=onepro.data
}

let images=[]

if(oneproduct&&oneproduct.images)
images=oneproduct.images.map((img)=>{return({original: img})})
else
images=[{original: `${Avatar}`}] 
   

useEffect(()=>{
    if(oneproduct&&oneproduct.category)
dispatch(Getonecategory(oneproduct.category))

},[oneproduct])

    const onecategoryy=useSelector(state=>state.allcategory.onecategory)
  


let cat=[]

if(onecategoryy&&onecategoryy.data)
{
    cat=onecategoryy.data
}
else {
    cat=[]
}


useEffect(()=>{
if(oneproduct&&oneproduct.brand)
{
    dispatch(Getonebrand(oneproduct.brand))
}
},[oneproduct])

const brand=useSelector(state=>state.all_brands.onebrand)

let onebrandd=[]
if(brand&&brand.data)
{
onebrandd=brand.data
}
else
{
    onebrandd=[]
}

useEffect(()=>{
    if(oneproduct&&oneproduct.category)
dispatch(GetProductsLike(oneproduct.category))

},[oneproduct])
const prolike=useSelector(state=>state.allproducts.productslike)


 let productsaslike=[]
    if(prolike&&prolike.data)
    {
        productsaslike=prolike.data
    }
    else
    {
        productsaslike=[]
    }


return[oneproduct,images,cat,onebrandd,productsaslike]

}

export default GetOneProductData
