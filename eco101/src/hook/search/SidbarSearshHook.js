import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_All_Cat } from '../../Redux/Actions/CategoryAction';
import { Getallbrands } from '../../Redux/Actions/BrandsAction';
import ViewProductsinHomeProductDetails from '../products/ViewProductsinHomeProductDetails';

const SidbarSearshHook = () => {
const [items,getproducts,pagecount,getdata]=ViewProductsinHomeProductDetails()
   const dispatch=useDispatch();


   useEffect(()=>{
    const getdata=async()=>{
await dispatch(Get_All_Cat(8))
await dispatch(Getallbrands(8))
    }
    getdata();
   },[])

   const cat=useSelector(state=>state.allcategory.category)
   const brands=useSelector(state=>state.all_brands.brands)

   let allcat=[];
   let allbrands=[];

   if(cat&&cat.data)
   {
allcat=cat.data
   }
   else
   {
    allcat=[]
   }
    


   if(brands&&brands.data)
   {
    allbrands=brands.data
   }
else
{
    allbrands=[]
}

// const[selectedcat,setselectedcat]=useState([])
// var querycat="";
// let value;
// const catchange=(e)=>{
//      value = e.target.value
//     console.log(value)
//     console.log(e.target.checked)
//     if(value==="0")
//     {
//         setselectedcat([])
//     }
//     else
//     {
//         if(e.target.checked === true)
//         {

//             setselectedcat([...selectedcat,value,value])
//             console.log(selectedcat)
            

//         }
//         else if(e.target.checked===false)
//         {
// const newarray=selectedcat.filter((e)=>e!==value)
// setselectedcat(newarray)
//         }
//     }
//     console.log(selectedcat)
// }


// const[catchecked,setcatchecked]=useState([]);
// const[brandchecked,setbrandchecked]=useState([]);

//     const clickcategoury=(e)=>{
// let value=e.target.value;
// if(value==="0")
// {
//     setcatchecked([])
// }
// else
// {
//     if(e.target.checked===true)
//     {
// setcatchecked([...catchecked,value])
//     }
//     else if(e.target.checked===false)
//     {
//        const  newarray=catchecked.filter((e)=>e!==value)
//         setcatchecked(newarray)
//     }
// }
//     }
// console.log(
//     catchecked
// )
// let catquery=""
//     useEffect(()=>{
//          catquery=catchecked.map(val=>"category[in][]="+val).join("&")
//         localStorage.setItem("catquery",catquery)
//          setTimeout(() => {
//             getproducts();

//          }, 1000);

     
//     },[catchecked])


//     const clickbrandchange=(e)=>{
//        let value=e.target.value;
//         if(value==="0")
//         {
//             setbrandchecked([])
//         }
//         else
//         {
//             if(e.target.checked===true)
//             {
//                 setbrandchecked([...brandchecked,value])
//             }
//             else if(e.target.checked===false)
//             {
//                 const newarraybrand=brandchecked.filter((e)=>e!==value)
//                 setbrandchecked(newarraybrand)
//             }


//         }
//     }


//     useEffect(()=>{
//         let brandquery=brandchecked.map(val=>"brand[in][]="+val).join("&")
//         brandquery=localStorage.setItem("brandquery",brandquery)

//         setTimeout(() => {
//           getproducts();
//         }, 1000)
        
//     },[brandchecked])

const[catchecked,setcatchecked]=useState([]);
const[brandchecked,setbrandchecked]=useState([]);

    const clickcategoury=(e)=>{
let value=e.target.value;
if(value==="0")
{
    setcatchecked([])
}
else
{
    if(e.target.checked===true)
    {
setcatchecked([...catchecked,value])
    }
    else if(e.target.checked===false)
    {
        const newarray=catchecked.filter((e)=>e!==value)
        setcatchecked(newarray)
    }
}
    }


    const clickbrand=(e)=>{
        let value=e.target.value;
        if(value==="0")
        {
            setbrandchecked([])
        }
        else
        {
            if(e.target.checked===true)
            {
        setbrandchecked([...brandchecked,value])
            }
            else if(e.target.checked===false)
            {
                const newarray=brandchecked.filter((e)=>e!==value)
                setbrandchecked(newarray)
            }
        }
            }

            useEffect(()=>{
                let catquery=catchecked.map(val=>"category[in][]="+val).join("&")
                localStorage.setItem("catquery",catquery)
                setTimeout(() => {
                    getproducts();
                }, 1000);
            },[catchecked])

            useEffect(()=>{
                let brandquery=brandchecked.map(val=>"brand[in][]="+val).join("&")
                localStorage.setItem("brandquery",brandquery)
                setTimeout(() => {
                    getproducts();
                }, 1000);
            },[brandchecked])


            const[pricefrom,setpricefrom]=useState('0')
            const[priceto,setpriceto]=useState('0')

 
            const changefrom=(e)=>{
                e.preventDefault();
                localStorage.setItem("pricefrom",e.target.value)
setpricefrom(e.target.value)
            }


            const changeto=(e)=>{
                e.preventDefault();
                localStorage.setItem("priceto",e.target.value)
setpriceto(e.target.value)
            }


            useEffect(()=>{


                setTimeout(() => {
                    getproducts();
                }, 1000);
            },[pricefrom,priceto])
return[allcat,allbrands,clickcategoury,clickbrand,changefrom,changeto]

}

export default SidbarSearshHook
