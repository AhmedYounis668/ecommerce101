import usegetdata from "../../Hooks/useGetData"
import { useinsertdata } from "../../Hooks/useInsertData"
import { Createsubcat, Get_Error, Getsubcatbycatid } from "../Types"



export const createnewsubcat=(formdata)=>async(dispatch)=>{
    try{
        const res=await useinsertdata(`/api/v1/subcategories`,formdata)
dispatch({
    type:Createsubcat,
payload:res,
loading:true,
})
    }
    catch(e){
        dispatch({
type:Get_Error,
payload:e+"error",
        })
    }
}

export const Getallsubcatbycatid=(id)=>async(dispatch)=>{
    try{
const res=await usegetdata(`/api/v1/categories/${id}/subcategories`)

dispatch({
    type:Getsubcatbycatid,
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