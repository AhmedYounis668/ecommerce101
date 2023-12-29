import React from 'react'
import { CreateNewCategory, Get_All_Category, Get_Error,Get_One_category } from '../Types'

const intial={
    category:[],
    onecategory:[],
    loading:true
}

const GetAllCategoreyReducer = (state=intial,action) => {


switch(action.type)
{
    case Get_All_Category:
        return{
            ...state,
            category:action.payload,
            loading:false,
        }
        case CreateNewCategory:
            return{
                category:action.payload,
                loading:false,
            }
            case Get_One_category:
                return{
                    onecategory:action.payload,
                    loading:false,
                }
               
        case Get_Error:
            return{
                loading:true,
                category:action.payload,
            }

            default:
                return state;
}




}

export default GetAllCategoreyReducer
