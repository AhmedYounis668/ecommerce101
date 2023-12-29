import usedeletedata from "../../Hooks/useDeleteData"
import useGetdata from "../../Hooks/useGetData"
import usegetdata from "../../Hooks/useGetData"
import { useinsertdata } from "../../Hooks/useInsertData"
import { UpdateDatawithimage } from "../../Hooks/useUpdateData"
import {Get_All_products_Search,Update_Product, Get_Error ,CreateNewProducttype, Get_All_products, Get_One_Product_Data, Get_products_like, Delete_Product, ProductsByOneCat, AllProductsByOneBrand} from "../Types"




export const CreateNewProduct=(formatdata)=>async(dispatch)=>{

    try{
const res=await useinsertdata(`/api/v1/products`,formatdata)

dispatch({
    type:CreateNewProducttype,
    payload:res,
})
    }

    catch(e)
    {
        dispatch({
            type:Get_Error,
            payload:e+"error"
        })
    }
}



export const Get_Products_Data=(limit)=>async(dispatch)=>{
    try{

        const res=await usegetdata(`/api/v1/products?limit=${limit}`)
        dispatch({
            type:Get_All_products,
            payload:res,
        })
    }

    catch(e)
    {
        dispatch({
            
            type:Get_Error,
            payload:e+"error"

        })

    }
}


export const GetOneProduct=(id)=>async(dispatch)=>{
    try{
const res=await usegetdata(`/api/v1/products/${id}`)
dispatch({
    type:Get_One_Product_Data,
    payload:res,
})
    }
    catch(e)
    {
        dispatch({
       type:Get_Error,
       payload:e+"error",
        })
    }
}

export const GetProductsLike=(id)=>async(dispatch)=>{
    try{
    const res=await usegetdata(`api/v1/products?category=${id}`)

    dispatch({
        type:Get_products_like,
        payload:res,
    })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:e+"error",   
         })
    }
    }



    export const Get_Products_Data_page=(limit,page)=>async(dispatch)=>{
        try{
    
            const res=await usegetdata(`/api/v1/products?limit=${limit}&page=${page}`)
            dispatch({
                type:Get_All_products,
                payload:res,
            })
        }
    
        catch(e)
        {
            dispatch({
                
                type:Get_Error,
                payload:e+"error"
    
            })
    
        }
    }


    export const Deleteproduct=(id)=>async(dispatch)=>{
        try{
const res=await usedeletedata(`/api/v1/products/${id}`)
dispatch({
    type:Delete_Product,
    payload:res,
    loading:true,
})
        }
        catch(e)
        {
            dispatch({
                type:Get_Error,
                payload:e+"error"
            })
        }
    }



    export const UpdateOneProduct=(id,data)=>async(dispatch)=>{
try
{
const res=await UpdateDatawithimage(`/api/v1/products/${id}`,data)

dispatch({
    type:Update_Product,
    payload:res,
})
}
catch(e)
{
    dispatch({
        type:Get_Error,
        payload:e+"error",
    })
}
    }


    export const GetAllProductsSearchAction=(quarystring)=>async(dispatch)=>{
        try
        {

            const res=await usegetdata(`/api/v1/products?${quarystring}`)
dispatch({
    type:Get_All_products,
    payload:res,
})
        }
        catch(e)
        {
            dispatch({
                type:Get_Error,
                payload:e+"error",
            })
        }
    }


    export const getproductsbyonecataction=(limit,id,page)=>async(dispatch)=>{
        try{
const res=await useGetdata(`/api/v1/products?limit=${limit}&category=${id}&page=${page}`)
console.log(res)
dispatch({
    type:ProductsByOneCat,
    payload:res,
    loading:true,
})
        }
        catch(e)
        {
            dispatch({
                type:Get_Error,
                payload:e+"error",
            })
        }
    }


    export const getallproductsbyonebrandaction=(limit,id,page)=>async(dispatch)=>{
        try{
const res=await useGetdata(`/api/v1/products?limit=${limit}&brand=${id}&page=${page}`)
dispatch({
    type:AllProductsByOneBrand,
    payload:res
})
        }
        catch(e)
        {
            dispatch({
                type:AllProductsByOneBrand,
                payload:e.res,
            })
        }
    }