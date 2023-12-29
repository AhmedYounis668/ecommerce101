import React from 'react'
import AdminProductCard from './AdminProductCard'
import AdminViewAllproductscard from '../../hook/products/AdminViewAllproductscard'

const AdminAllproductContainer = () => {
  const[items,pagecount,getdata]=AdminViewAllproductscard();
  console.log(pagecount)
  return (
    <div className='d-flex justify-content-start gap-3 flex-wrap box' >

    {
      items?(items.map((products)=>{return(
        <AdminProductCard prodata={products}/>

      )})):null
    }
    </div>
  )
}

export default AdminAllproductContainer
