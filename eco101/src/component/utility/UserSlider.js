import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserSlider = () => {
  return (
    <div style={{marginRight:'10px'}}>
    <Link to={`/Userpageallorders`}>
      <div style={{textAlign:'center'}} className='w-100 button-55'>
<div  style={{textDecoration:'none',fontFamily:'El messiri',color:'black',textAlign:'center'}}>اداره الطلبات</div>
</div>
</Link>

<Link to={`/userfavproducts`}>
<div style={{textAlign:'center'}}  className=' w-100 button-55'>
<div  style={{textDecoration:'none',fontFamily:'El messiri',color:'black',textAlign:'center'}}> المنتجات المفضله</div>
</div>
</Link>

<Link to={`/useraddresspage`}>
<div  style={{textAlign:'center'}} className=' w-100 button-55'>
<div style={{textDecoration:'none',fontFamily:'El messiri',color:'black',textAlign:'center'}}> العنواين الشخصيه</div>
</div>
</Link>

<Link to={`/userProfile`}>
<div style={{textAlign:'center'}}  className=' w-100 button-55'>
<div style={{textDecoration:'none',fontFamily:'El messiri',color:'black',textAlign:'center'}}> الملف الشخصي</div>
</div>
</Link>

    </div>
  )
}

export default UserSlider
