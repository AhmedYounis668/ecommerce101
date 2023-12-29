import { CreateNewBrand, Get_All_Brand,Get_one_brand, Get_Error } from "../Types"

const intial={
    brands:[],
    onebrand:[],
    loading:true,
}
const BrandsReducer = (state=intial,action) => {
 
    switch(action.type)
    {
        case Get_All_Brand:
            return{
                ...state,
                brands:action.payload,
                loading:false,
            }
            case CreateNewBrand:
            return{
                brands:action.payload,
                loading:false,
            }
            case Get_one_brand:
                return{
                    onebrand:action.payload,
                    loading:false,
                }
            case Get_Error:
                return{
                    loading:true,
                    brands:action.payload,
                }
                default:
                    return state;
    }
}

export default BrandsReducer
