
import React from 'react'
import { Createsubcat, Get_Error, Getsubcatbycatid } from '../Types'

const intial={
    subcat:[],
loading:true,
}


const Subcatreducer = (state=intial,action) => {
switch(action.type){
    case Createsubcat:
        return{
            ...state,
            subcat:action.payload,
            loading:false,
        }
        case Get_Error:
            return{
                loading:true,
                subcat:action.payload,
            }
            case Getsubcatbycatid:
                return{
                    ...state,
                    subcat:action.payload,
                    loading:false,
                }
            default:
                return state;
}
}

export default Subcatreducer
