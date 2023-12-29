import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = ({auth,children}) => {
 if(auth===false)
 {
    return <Navigate to='/' replace/>
 }

 return children?children:<Outlet/>
}

export default ProtectRoute
