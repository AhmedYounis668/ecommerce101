import React, { useEffect } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import CategouryHeader from '../../component/search/CategouryHeader'
import ProductDetailsComponent from '../../component/products/ProductDetailsComponent'
import { useParams } from 'react-router-dom'
import ProductCardContainer from '../../component/Home/ProductCardContainer'
import GetOneProductData from '../../hook/products/GetOneProductData'
import love from '../../images/fav-on.png'
import { Get_All_Cat } from '../../Redux/Actions/CategoryAction'
import { useDispatch, useSelector } from 'react-redux'
const ProductDetailsPage = () => {
  const {id}=useParams();
   const[oneproduct,images,cat,onebrandd,productsaslike]=GetOneProductData(id)

   if(productsaslike)
   {
    var items=productsaslike.slice(0,4)
   }


   

   return (
    <div style={{minHeight:'670px'}}>
      
      <Container>
      
<CategouryHeader/>
<ProductDetailsComponent />
<ProductCardContainer products={items}  title="منتجات قد تعجبك"/>


      </Container>

      <div id="heartcontainer2">

</div>
    </div>
  )
}

export default ProductDetailsPage
