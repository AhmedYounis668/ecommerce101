import React, { useEffect, useState } from 'react'

const useProtectedRouteHook = () => {
 
    const[user,setuser]=useState(JSON.parse(localStorage.getItem("user")))
    const[isuser,setisuser]=useState()
    const[isadmin,setadmin]=useState()

    useEffect(()=>{
        if(user!=null)
        {
            if(user.role==="user")
            {
                setadmin(false)
                setisuser(true)
            }
            else{
                setadmin(true)
                setisuser(false)
            }
        }
        else
        {
            setadmin(false)
            setisuser(false)
        }
    },[])
    
    return[user,isuser,isadmin]
}

export default useProtectedRouteHook
