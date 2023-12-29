
import {combineReducers} from 'redux'
import GetAllCategoreyReducer from './GetAllCategoreyReducer'
import BrandsReducer from './BrandsReducer'
import Subcatreducer from './Subcatreducer'
import ProductsReducer from './ProductsReducer'
import UserReducer from './UserReducer'
import ReviewsReducer from './ReviewsReducer'
import WishlistReducer from './WishlistReducer'
import CoponReducer from './CoponReducer'
import CardReducer from './CardReducer'

export default combineReducers({
    allcategory:GetAllCategoreyReducer,
    all_brands:BrandsReducer,
    subcategory:Subcatreducer,
    allproducts:ProductsReducer,
    allusers:UserReducer,
    allreviews:ReviewsReducer,
    allwishlist:WishlistReducer,
    allcopons:CoponReducer,
    allcart:CardReducer,
})



