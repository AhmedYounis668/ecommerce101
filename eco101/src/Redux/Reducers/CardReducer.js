

import React from 'react'
import { AddToCart, ChangeQty, DeleteAllCard, DeleteCard, GetAllCart } from '../Types';

const intial={
    addtocart:[],
    getallcart:[],
    updatecardqty:[],
    deletecard:[],
    deleteallcard:[],
    loading:true
}
const CardReducer = (state=intial,action) => {


    switch (action.type) {
        case AddToCart:
            return{
                ...state,
                addtocart:action.payload,
                loading:false,
            }
            case GetAllCart:
                return{
                    ...state,
                    getallcart:action.payload,
                    loading:false
                }
                case ChangeQty:
                    return{
                        ...state,
                        updatecardqty:action.payload,
                    loading:false
                    }
                    case DeleteCard:
                        return{
                            ...state,
                            deletecard:action.payload,
                            loading:false
                        }
                        case DeleteAllCard:
                            return{
                                ...state,
                                deleteallcard:action.payload,
                                loading:false
                            }
    
        default:
            return state;
    }
}

export default CardReducer
