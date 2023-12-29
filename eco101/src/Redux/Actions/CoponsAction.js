import usedeletedata from "../../Hooks/useDeleteData"
import useGetDatatoken from "../../Hooks/useGetDataToken"
import { useinsertdatawithoutimage } from "../../Hooks/useInsertData"
import { UpdateDatawithimage, UpdateProductdata } from "../../Hooks/useUpdateData"
import { Add_New_Copon, DeleteCopon, GetAllCopons, UpdateCopon, UseCopone } from "../Types"




export const addcoponaction=(body)=>async(dispatch)=>{
    try
    {
const res=await useinsertdatawithoutimage(`/api/v1/coupons`,body)

dispatch({
    type:Add_New_Copon,
    payload:res,
})
    }
    catch(e)
    {
       dispatch({
        type:Add_New_Copon,
        payload:e.res,
       })
    }
}


export const getallcoponsaction=()=>async(dispatch)=>{
    try{
const res=await useGetDatatoken(`/api/v1/coupons`)
dispatch({
    type:GetAllCopons,
    payload:res
})
    }
    catch(e)
    {
dispatch({
    type:GetAllCopons,
    payload:e.res,

})
    }
}

export const deletecoponaction=(id)=>async(dispatch)=>{
    try{
const res=await usedeletedata(`/api/v1/coupons/${id}`)
dispatch({
    type:DeleteCopon,
    payload:res,
    loading:true,
})
    }
    catch(e)
    {
dispatch({
    type:DeleteCopon,
    payload:e.res,
})
    }
}

export const updatecoponaction=(id,body)=>async(dispatch)=>{
    try{
const res=await UpdateProductdata(`/api/v1/coupons/${id}`,body)
dispatch({
    type:UpdateCopon,
    payload:res,
    loading:true

})
    }
    catch(e)
    {
        dispatch({
            type:UpdateCopon,
            payload:e.res
        })

    }
}


export const usecoponaction=(body)=>async(dispatch)=>{
try{
const res=await UpdateProductdata(`/api/v1/cart/applyCoupon`,body)
dispatch({
    type:UseCopone,
    payload:res,
})
}
catch(e)
{
    dispatch({
        type:UseCopone,
        payload:e.res
    })
}
}