import usedeletedata from "../../Hooks/useDeleteData"
import useGetDatatoken from "../../Hooks/useGetDataToken"
import { useinsertdatawithoutimage } from "../../Hooks/useInsertData"
import { FavAdd, FavRemove, GetAllWishlist } from "../Types"




export const addtowishlistaction=(body)=>async(dispatch)=>{
    try{
const res=await useinsertdatawithoutimage(`/api/v1/wishlist`,body)
dispatch({
    type:FavAdd,
    payload:res,
})
    }
    catch(e)
    {
dispatch({
    type:FavAdd,
    payload:e.res,
})
    }
}


export const removefromwishlist=(id)=>async(dispatch)=>{
    try{
const res=await usedeletedata(`/api/v1/wishlist/${id}`)
dispatch({
    type:FavRemove,
    payload:res,
    loading:true,
})
    }
    catch(e){
dispatch({
    type:FavRemove,
    payload:e.res,
})
    }
}


export const getallwishlistaction=()=>async(dispatch)=>{
    try{
const res=await useGetDatatoken(`/api/v1/wishlist`)
dispatch({
    type:GetAllWishlist,
    payload:res,
    loading:true,
})
    }
    catch(e){
dispatch({
    type:GetAllWishlist,
    payload:e.res,
})
    }
}

