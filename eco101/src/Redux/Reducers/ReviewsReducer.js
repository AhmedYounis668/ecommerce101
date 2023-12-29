import { Add_Comment, Delete_Comment, Get_All_Reviews, Update_Comment } from "../Types"


const intial={
    addreview:[],
    allreviews:[],
    deletecomment:[],
    updatecomment:[],
    loading:true,
}

const ReviewsReducer = (state=intial,action) => {

    switch(action.type)
    {
        case Add_Comment:
            return{
addreview:action.payload,
loading:false,
            }
            case Get_All_Reviews:
                return{
                    ...state,
           allreviews:action.payload,
           loading:false,
                }
                case Delete_Comment:
                    return{
                        ...state,
                        deletecomment:action.payload,
                        loading:false,
                    }
                    case Update_Comment:
                        return{
                            ...state,
                            updatecomment:action.payload,
                            loading:false
                        }
            default:
                return state; 
    }
    
}

export default ReviewsReducer
