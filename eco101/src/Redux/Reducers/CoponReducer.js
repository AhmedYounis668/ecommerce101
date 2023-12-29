import React from 'react'
import { Add_New_Copon, DeleteCopon, GetAllCopons, UpdateCopon, UseCopone } from '../Types';


const intial={
    AddCopon:[],
    allcopons:[],
    deletecopon:[],
    updatecopon:[],
    usecopon:[],
    loading:true,
}
const CoponReducer = (state=intial,action) => {

switch (action.type) {
    case Add_New_Copon:
        return{
            ...state,
            AddCopon:action.payload,
            loading:false,
        }
        case GetAllCopons:
            return{
                ...state,
                allcopons:action.payload,
                loading:false,
            }
            case DeleteCopon:
                return{
                    ...state,
                    deletecopon:action.payload,
                    loading:false,
                }
                case UpdateCopon:
                    return{
                        ...state,
                        updatecopon:action.payload,
                        loading:false
                    }
                    case UseCopone:
                        return{
                            ...state,
                            usecopon:action.payload,
                            loading:false
                        }
       

    default:
        return state;
}
}

export default CoponReducer
