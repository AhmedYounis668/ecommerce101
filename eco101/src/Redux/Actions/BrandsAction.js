import usegetdata from "../../Hooks/useGetData"
import { useinsertdata } from "../../Hooks/useInsertData"
import { CreateNewBrand, Get_All_Brand,Get_one_brand, Get_Error } from "../Types"


export const Getallbrands=(limit)=>async(dispatch)=>{
    try{
const res=await usegetdata(`/api/v1/brands?limit=${limit}`)

dispatch({
    type:Get_All_Brand,
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

export const getbrandswithpage=(limit,page)=>async(dispatch)=>{
    try{
const res=await usegetdata(`/api/v1/brands?limit=${limit}&page=${page}`)
dispatch({
    type:Get_All_Brand,
    payload:res,
    
})
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:e+"error"
        })
    }
}


export const insertbrand=(formdata)=>async(dispatch)=>{

    try{
const res=await useinsertdata(`/api/v1/brands`,formdata)
dispatch({
    type:CreateNewBrand,
    payload:res,
})
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:e+"error"
        })
    }
}


export const Getonebrand=(id)=>async(dispatch)=>{
    try{
const res=await usegetdata(`/api/v1/brands/${id}`)
dispatch({
    type:Get_one_brand,
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