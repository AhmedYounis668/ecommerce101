import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import SidbarSearshHook from '../../hook/search/SidbarSearshHook'

const LeftSidesearch = () => {
  const [allcat,allbrands,clickcategoury,clickbrand,changefrom,changeto]=SidbarSearshHook();
  return (
    <Col className=' w-100 leftslidersearch my-4'>
    <div >


    {/* categoury */}


    <div className='button-2 w-100'>التصنيفات</div>



    <div className='a'  >

    <div   className='d-flex justify-content-start mx-2 '>
    <input value="0" onChange={clickcategoury}  style={{border:'1px solid red'}} className="form-check-input my-2 checksearch  mx-2" type="checkbox"  />

  

  <label style={{fontFamily:'El messiri'}}  className="form-check-label my-2  checksearch " >
الكل
  </label>
    
</div>
    

    {
  allcat?(allcat.map((cat,index)=>{return(
    <div  key={index}  className='d-flex justify-content-start mx-3'>
    <input value={cat._id} onChange={clickcategoury}   style={{border:'1px solid red'}} className="form-check-input my-2 checksearch " type="checkbox"  id="cat"/>
  <label className="form-check-label my-2 mx-2 checksearch " for="cat">
  {cat.name} 
  </label>
</div>
  )})):<div  style={{fontFamily:'El messiri'}}>لايوجد تصنيفات</div>
}

    
</div>


  

{/* brands */}

      <div className='button-2 w-100'>البرندات</div>

      <div   className='d-flex justify-content-start mx-2 '>
    <input value="0" onChange={clickbrand}  style={{border:'1px solid red'}} className="form-check-input my-2 checksearch  mx-2" type="checkbox"  />

  

  <label  style={{fontFamily:'El messiri'}} className="form-check-label my-2  checksearch " >
الكل
  </label>
    
</div>

{
  allbrands?(allbrands.map((brand,index)=>{return(
    <div  key={index}  className='d-flex justify-content-start mx-3'>
    <input value={brand._id} onChange={clickbrand}   style={{border:'1px solid red'}} className="form-check-input my-2 checksearch " type="checkbox"  id="brand"/>
  <label className="form-check-label my-2 mx-2 checksearch " for="brand">
  {brand.name} 
  </label>
</div>
  )})):<div  style={{fontFamily:'El messiri'}}>لايوجد ماركات</div>
}
      





{/* price search */}

<div className='button-2 w-100'>بحث بالسعر</div>

<div  className='d-flex justify-content-center'>
<label className="my-2 mx-2 checksearch " for="from" style={{fontFamily:'El Messiri'}}>
من 
</label>
<input onChange={changefrom} style={{border:'1px solid red'}}  type="number"  id="from" className='w-50 my-1'/>
</div>



<div  className='d-flex justify-content-center'>
<label className="form-check-label my-2 mx-2 checksearch " for="to" style={{fontFamily:'El Messiri'}}>
الي
</label>
<input onChange={changeto} style={{border:'1px solid red'}}  type="number"  id="to" className='w-50 my-1' />
</div>

    </div>
    </Col>
  )
}

export default LeftSidesearch
