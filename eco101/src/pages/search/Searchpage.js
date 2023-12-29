import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import SearchResult from '../../component/search/SearchResult';
import CategouryHeader from '../../component/search/CategouryHeader';
import LeftSidesearch from '../../component/search/LeftSidesearch';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import ProductCardContainer from '../../component/Home/ProductCardContainer';
import ViewProductsinHomeProductDetails from '../../hook/products/ViewProductsinHomeProductDetails';
import Pagination from '../../../src/component/utility/Pagination'
const Searchpage = () => {

  const[items,getproducts,pagecount,getdata]=ViewProductsinHomeProductDetails();
  return (
    <div style={{minHeight:'670px'}}>
    <Container>
    {/* categoury header */}
<CategouryHeader/>
{/* search result 400نتيجه بحث+ ال dropdown */}

<SearchResult onclick={getproducts} items={items} />

<Row>
<Col className='d-flex justify-content-center col-5 col-md-2'>
<LeftSidesearch/>


</Col>


<Col className='d-flex flex-wrap flex-row justify-content-start  col-7 col-md-10'>

{/* {
  items?(items.map((item,index)=>{return(

<ProductCard key={index} items={item}/>
  )})):null
} */}

<ProductCardContainer products={items}/>


</Col>

</Row>
<Pagination pagecount={pagecount} onpress={getdata}/>

     </Container>
    </div>
  )
}

export default Searchpage
