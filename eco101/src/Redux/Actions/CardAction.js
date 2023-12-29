import usedeletedata from "../../Hooks/useDeleteData"
import useGetDatatoken from "../../Hooks/useGetDataToken"
import { useinsertdatawithoutimage } from "../../Hooks/useInsertData"
import { UpdateProductdata } from "../../Hooks/useUpdateData"
import { AddToCart, ChangeQty, DeleteAllCard, DeleteCard, GetAllCart } from "../Types"



export const createaddtocard=(body)=>async(dispatch)=>{
    try{
      const res=await useinsertdatawithoutimage(`/api/v1/cart`,body)

      dispatch({
        type:AddToCart,
        payload:res
      })
    }
    catch(e)
    {
        dispatch({
            type:AddToCart,
            payload:e.res,
        })

    }
}


export const getallcatrtaction=()=>async(dispatch)=>{
  try{
const res=await useGetDatatoken(`/api/v1/cart`)
dispatch({
  type:GetAllCart,
  payload:res
})
  }
  catch(e)
  {
dispatch({
  type:GetAllCart,
  payload:e.res
})
  }
}

export const updatecardqtyaction=(id,body)=>async(dispatch)=>{
  try{
const res=await UpdateProductdata(`/api/v1/cart/${id}`,body)
dispatch({
  type:ChangeQty,
  payload:res
})
  }
  catch(e)
  {
    dispatch({
      type:ChangeQty,
      payload:e.res
    })
  }
}
  


export const deletecardactin=(id)=>async(dispatch)=>{
  try{
const res=await usedeletedata(`/api/v1/cart/${id}`)
dispatch({
  type:DeleteCard,
  payload:res
})
  }
  catch(e)
  {
    dispatch({
      type:DeleteCard,
      payload:e.res
    })
  }
}

export const deleteallcardaction=()=>async(dispatch)=>{
  try{
const res=await usedeletedata(`/api/v1/cart`)
dispatch({
  type:DeleteAllCard,
  payload:res
})
  }
  catch(e)
  {
    dispatch({
      type:DeleteAllCard,
      payload:e.res
    })
  }
}
