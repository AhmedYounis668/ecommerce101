import React from 'react'
import { Link } from 'react-router-dom'

const Adminsidbare = () => {
  return (
    <div className='w-100  text-center adminsidebarbackground my-2' >
     <Link to='/AdminAllorders' style={{textDecoration:'none'}}>
      <div className='p-2  my-2  adminsidebarebutton' >اداره الطلبات </div>
      </Link>

    <Link to='/Adminallproducts' style={{textDecoration:'none'}}>
      <div className='p-2  my-2  adminsidebarebutton' >كل المنتجات</div>
      </Link>


      <Link to='/AdminAddCategory' style={{textDecoration:'none'}}>
      <div className='p-2  my-2  adminsidebarebutton'>اضافه تصنيف</div>
      </Link>

      <Link to='/AdminAddBrand' style={{textDecoration:'none'}}>
      <div className='p-2  my-2  adminsidebarebutton'>اضافه ماركه</div>
      </Link>

      <Link to="/AdminAddSubCategory" style={{textDecoration:'none'}}>
      <div className='p-2  my-2  adminsidebarebutton'>اضافه تصنيف فرعي</div>
      </Link>
      <Link to="/AdminAddproductPage" style={{textDecoration:'none'}}>
      <div className='p-2  my-2  adminsidebarebutton'>اضافه منتج</div>
      </Link>

      <Link to="/AdminAddcoponPage" style={{textDecoration:'none'}}>
      <div className='p-2  my-2  adminsidebarebutton'>اضافه كوبون</div>
      </Link>
    </div>
  )
}

export default Adminsidbare
