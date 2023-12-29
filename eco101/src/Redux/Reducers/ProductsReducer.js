import {Update_Product, CreateNewProducttype, Delete_Product, Get_All_products, Get_Error, Get_One_Product_Data,Get_products_like, ProductsByOneCat, AllProductsByOneBrand } from "../Types"



const intial={
    product:[],
    allproducts:[],
    oneproduct:[],
    productslike:[],
    deleteproduct:[],
    update_pro:[],
    allprobyonecat:[],
    productsbyonebrand:[],
    loading:true,
}


const ProductsReducer = (state=intial,action) => {

    switch(action.type)
    {
        case CreateNewProducttype:
            return{
                product:action.payload,
                loading:false
            }
            case Get_All_products:
                return{
                    allproducts:action.payload,
                    loading:false,
                }
                case Get_One_Product_Data:
                    return{
                        oneproduct:action.payload,
                        loading:false,
                    }
                    case Get_products_like:
                        return{
                            ...state,
                          productslike:action.payload,  
                        loading:false,
                        }
                        case Delete_Product:
                            return{
                                ...state,
                                deleteproduct:action.payload,
                                loading:false,
                            }
                            case  Update_Product:
                                return{
                                    update_pro:action.payload,
                                    loading:false,
                                }
                                case ProductsByOneCat:
                                    return{
                                        ...state,
                                        allprobyonecat:action.payload,
                                        loading:false,
                                    }
                                    case AllProductsByOneBrand:
                                        return{
                                            ...state,
                                            productsbyonebrand:action.payload,
                                            loading:false,
                                        }
                               
            case Get_Error:
                return{
                    loading:true,
                    product:action.payload,

                }
                default:
                    return state;
    }

}

export default ProductsReducer
