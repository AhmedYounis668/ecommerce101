import usegetdata from "../../Hooks/useGetData"
import { useinsertdata } from "../../Hooks/useInsertData"
import { CreateNewCategory, Get_All_Category,Get_One_category, Get_Error } from "../Types"



export const Get_All_Cat=(limit)=>async(dispatch)=>{

    try
    {
        const res=await usegetdata(`/api/v1/categories?limit=${limit}`)
    dispatch({
        type:Get_All_Category,
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


export const Get_All_Cat_page=(page)=>async(dispatch)=>{

    try
    {
        const res=await usegetdata(`/api/v1/categories?limit=4&page=${page}`)
    dispatch({
        type:Get_All_Category,
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

export const insertcategory=(formdata)=>async(dispatch)=>{
try{
const res=await useinsertdata(`/api/v1/categories`,formdata)

dispatch({
    type:CreateNewCategory,
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


export const Getonecategory=(id)=>async(dispatch)=>{
    try{
const res=await usegetdata(`/api/v1/categories/${id}`)

dispatch({
    type:Get_One_category,
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


