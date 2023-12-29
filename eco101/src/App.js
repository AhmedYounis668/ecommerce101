import NavbarLogin from "./component/utility/NavbarLogin";
import HomePage from "./pages/Home/HomePage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from '../src/component/Home/Footer'
import Login from "./component/Auth/Login";
import Categourypage from "./pages/categoury/Categourypage";
import BrandPage from "./pages/Brand/BrandPage";
import Rigester from "./component/Auth/Rigester";
import Searchpage from "./pages/search/Searchpage";
import ProductDetailsPage from "./pages/product/ProductDetailsPage";
import CardPage from "./pages/Card/CardPage";
import PaymentWay from "./component/checkout/PaymentWay";
import Adminallproductspage from "./pages/Admin/Adminallproductspage";
import AdminAllOrders from "./pages/Admin/AdminAllOrders";
import AddCategorey from "./pages/Admin/AddCategorey";
import AdminAddbrandPage from "./pages/Admin/AdminAddbrandPage";
import AdminAddSubCategory from "./pages/Admin/AdminAddSubCategory";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage";
import Adminupdateproduct from "./pages/Admin/Adminupdateproduct";
import UserPageHome from "./pages/userspage/UserPageHome";
import UserAllorderComponent from "./component/users/UserAllorderComponent";
import UserFavaurateproducts from "./pages/userspage/UserFavaurateproducts";
import UserAddressesPage from "./pages/userspage/UserAddressesPage";
import UserAddNewAddress from "./pages/userspage/UserAddNewAddress";
import UserProfilePage from "./pages/userspage/UserProfilePage";
import AdminAddCoponPage from "./pages/Admin/AdminAddCoponPage";
import CategouriesByProductPage from "./pages/categoury/CategouriesByProductPage";
import AllProductsByoneBrandPage from "./pages/Brand/AllProductsByoneBrandPage";
import useProtectedRouteHook from "./hook/useProtectedRouteHook";
import ProtectRoute from "./component/utility/ProtectRoute";
function App() {
  const[user,isuser,isadmin]=useProtectedRouteHook()

  return (
    <div className="">
    <NavbarLogin/>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/categoury" element={<Categourypage/>}/>
        <Route path="/Brand" element={<BrandPage/>}/>
        <Route path="/rigister" element={<Rigester/>}/>
        <Route path="/searchpage" element={<Searchpage/>}/>
        <Route path="/Productsbyonecatsearch/:id" element={<CategouriesByProductPage/>}/>
        <Route path="/productbyonebrand/:id" element={<AllProductsByoneBrandPage/>}/>
        <Route path="/product/:id" element={<ProductDetailsPage/>}/>
        <Route path="/card" element={<CardPage/>}/>

<Route element={<ProtectRoute auth={isadmin}/>}>
        <Route path="/Adminallproducts" element={<Adminallproductspage/>}/>
        <Route path="/AdminAllorders" element={<AdminAllOrders/>}/>
        <Route path="/AdminAddCategory" element={<AddCategorey/>}/>
        <Route path="/AdminAddBrand" element={<AdminAddbrandPage/>}/>
        <Route path="/AdminAddSubCategory" element={<AdminAddSubCategory/>}/>
        <Route path="/AdminAddproductPage" element={<AdminAddProductPage/>}/>
        <Route path="/Adminupdateproductpage/:id" element={<Adminupdateproduct/>}/>
        <Route path="/AdminAddcoponPage" element={<AdminAddCoponPage/>}/>

</Route>

<Route element={<ProtectRoute auth={isuser}/>}>
        <Route path="/Userpageallorders" element={<UserPageHome/>}/>
        <Route path="/Userallorderscomponent" element={<UserAllorderComponent/>}/>
        <Route path="/userfavproducts" element={<UserFavaurateproducts/>}/>
        <Route path="/useraddresspage" element={<UserAddressesPage/>}/>
        <Route path="/useraddnewaddress" element={<UserAddNewAddress/>}/>
        <Route path="/userProfile" element={<UserProfilePage/>}/>
        <Route path="/Adminpayment" element={<PaymentWay/>}/>

</Route>
        
        

        
      
       
        
      </Routes>
    </BrowserRouter>
    <Footer/>

    </div>
  );
}

export default App;
