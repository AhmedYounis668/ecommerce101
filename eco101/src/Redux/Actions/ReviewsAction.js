import usedeletedata from "../../Hooks/useDeleteData"
import useGetDatatoken from "../../Hooks/useGetDataToken"
import { useinsertdatawithoutimage } from "../../Hooks/useInsertData"
import { UpdateProductdata } from "../../Hooks/useUpdateData"
import { Add_Comment, Delete_Comment, Get_All_Reviews, Update_Comment } from "../Types"




export const AddNewReview=(prodID,data)=>async(dispatch)=>{
    try{

        const res=await useinsertdatawithoutimage(`/api/v1/products/${prodID}/reviews`,data)
        dispatch({
            type:Add_Comment,
            payload:res,
        })
    }
    catch(e)
    {
dispatch({
    type:Add_Comment,
    payload:e.res,
})
    }
}


export const getallReviews=(proid,page,limit)=>async(dispatch)=>{
try{
    const res=await useGetDatatoken(`/api/v1/products/${proid}/reviews?page=${page}&limit=${limit}`)
dispatch({
type:Get_All_Reviews,
payload:res,
})
}
catch(e)
{
    dispatch({
        type:Get_All_Reviews,
  payload:e.res
    })
}
}

export const deletecommentaction=(id)=>async(dispatch)=>{
    try{
const res=await usedeletedata(`/api/v1/reviews/${id}`)
dispatch({
    type:Delete_Comment,
    payload:res,
    loading:true,
})
    }
    catch(e)
    {
dispatch({
    type:Delete_Comment,
    payload:e.res,
})
    }
}



export const updatecommentaction=(id,body)=>async(dispatch)=>{
    try{
const res=await UpdateProductdata(`/api/v1/reviews/${id}`, body)
dispatch({
    type:Update_Comment,
    payload:res,
    loading:true,
})
    }
    catch(e)
    {
dispatch({
    type:Update_Comment,
    payload:e.res,
})
    }
}