import { AddAddress, Create_New_Account, DeleteUserAddress, GetAllAddress, UpdateUserAddress, UpdateUserData, UserChangeOldPass, User_Login } from "../Types"


const intial={
    CreateUser:[],
    login:[],
    addaddress:[],
    getalladdress:[],
    changeoldpass:[],
    updateuserdata:[],
    deleteuseraddress:[],
    updateuseraddress:[],
    loading:true,
 }

const UserReducer = (state=intial,action) => {


switch(action.type){
    case Create_New_Account:
        return{
            ...state,
            CreateUser:action.payload,
        }
        case User_Login:
            return{
                login:action.payload,
                loading:false,

            }
            case AddAddress:
                return{
                    ...state,
                    addaddress:action.payload,
                    loading:false,
                }
                case GetAllAddress:
                    return{
                        ...state,
                        getalladdress:action.payload,
                        loading:false,
                    }
                    case UserChangeOldPass:
                        return{
                            ...state,
                        changeoldpass:action.payload,
                        loading:false,
                        }
                        case UpdateUserData:
                            return{
                                updateuserdata:action.payload,
                                loading:false,
                            }
                            case DeleteUserAddress:
                                return{
                                    ...state,
                                    deleteuseraddress:action.payload,
                                    loading:false,
                                }
                                case UpdateUserAddress:
                                    return{
                                        ...state,
                                        updateuseraddress:action.payload,
                                        loading:false
                                    }

       

        default:
            return state;

   
        }

}




export default UserReducer
