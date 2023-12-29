import { FavAdd, FavRemove, GetAllWishlist } from "../Types"



const intial={
    AddWishlist:[],
    RemoveWishlist:[],
    AllWishlist:[],
    loading:true,
}


const WishlistReducer = (state=intial,action) => {

    switch(action.type)
    {
        case FavAdd:
            return{
                ...state,
              AddWishlist:action.payload,
              loading:false,
            }
            case FavRemove:
                return{
                    ...state,
                    RemoveWishlist:action.payload,
                    loading:false, 
                }
                case GetAllWishlist:
                    return{
                        ...state,
                       AllWishlist:action.payload,
                       loading:false, 
                    }
            default:
                return state;
    }

}

export default WishlistReducer
