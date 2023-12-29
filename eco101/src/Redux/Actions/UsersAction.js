import useinsertdatanotimage from "../../Hooks/usePostdatanoimage"
import {useinsertdatawithoutimage} from "../../Hooks/useInsertData"
import { AddAddress, Create_New_Account, DeleteUserAddress, GetAllAddress, UpdateUserAddress, UpdateUserData, UserChangeOldPass, User_Login } from "../Types"
import useGetDatatoken from "../../Hooks/useGetDataToken"
import { UpdateProductdata } from "../../Hooks/useUpdateData"
import usedeletedata from "../../Hooks/useDeleteData"




export const createNewUserAccount=(data)=>async(dispatch)=>{
    try
    {
const res=await useinsertdatawithoutimage(`/api/v1/auth/signup`, data)
dispatch({
    type:Create_New_Account,
payload:res,

})
    }
    catch(e)
    {
dispatch({
    type:Create_New_Account,
    payload:e.res
})
    }
}

export const userloginaction=(data)=>async(dispatch)=>{
    try{
const res=await useinsertdatawithoutimage(`/api/v1/auth/login`,data)
dispatch({
    type:User_Login,
    payload:res,

})
    }
    catch(e)
    {
        dispatch({
            type:User_Login,
            payload:e.res,
        })
    }
}


export  const addnewaddressaction=(body)=>async(dispatch)=>{
    try{
const res=await useinsertdatawithoutimage(`/api/v1/addresses`,body)

dispatch({
    type:AddAddress,
    payload:res,
    loading:true
})
    }
    catch(e)
    {

        dispatch({
            type:AddAddress,
            payload:e.res
        })

    }
}

export const getalladdressaction=()=>async(dispatch)=>{
    try{
const res=await useGetDatatoken(`/api/v1/addresses`)
dispatch({
    type:GetAllAddress,
    payload:res,
    loading:true
})
    }
    catch(e)
    {
        dispatch({
            type:GetAllAddress,
            payload:e.res
        })

    }
}


export const changeoldpassaction=(body)=>async(dispatch)=>{
    try{
const res=await UpdateProductdata(`/api/v1/users/updateMe`,body)
dispatch({
    type:UserChangeOldPass,
    payload:res
})
    }
    catch(e)
    {
dispatch({
    type:UserChangeOldPass,
    payload:e.res
})
    }
}


export const updateuserdataaction=(body)=>async(dispatch)=>{
    try{
const res=await UpdateProductdata(`/api/v1/users/updateMe`,body)

dispatch({
    type:UpdateUserData,
    payload:res
})
    }
    catch(e)
    {
        dispatch({
            type:UpdateUserData,
            payload:e.res
        })
    }
}


export const deleteuseraddressaction=(id)=>async(dispatch)=>{
    try{
const res=await usedeletedata(`/api/v1/addresses/${id}`)
    }
    catch(e)
    {
        dispatch({
            type:DeleteUserAddress,
            payload:e.res
        })
    }
}

export const updateuseraddressaction=(id,body)=>async(dispatch)=>{
    try{
const res=await UpdateProductdata(`/api/v1/addresses/${id}`,body)
dispatch({
    type:UpdateUserAddress,
    payload:res,
})
    }
    catch(e)
    {
        dispatch({
            type:UpdateUserAddress,
            payload:e.res
        })
    }
}