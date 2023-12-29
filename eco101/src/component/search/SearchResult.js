import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import imgdrop from '../../images/sort.png'
const SearchResult = ({items,onclick}) => {
    const handler=()=>{

    }


    const click=(key)=>{
      localStorage.setItem("keyword",key)
      onclick();
      
    }

  return (
    <div className='d-flex justify-content-between my-3'>
<p style={{fontFamily:'El messiri'}}>هناك<span style={{color:'red',fontWeight:'bold',fontSize:'17px'}}> {items.length}</span>  نتيجه بحث ..</p>
<UnopDropdown
  onAppear={handler}
  onDisappearStart={handler}
  trigger=<div style={{fontFamily:'El messiri'}}><img src={imgdrop} style={{width:'30px',height:'20px'}} className='mx-2' alt='dropimg'/>ترتيب حسب ...</div>
  delay={300}
  align="CENTER"
  hover
>
  <div>
    <div onClick={()=>click("الاكثر مبيعا")}  className='btndrop' style={{fontFamily:'El messiri'}}>الاكثر مبيعا</div>
    <div onClick={()=>click("من الاعلي سعرا الي الاقل")}  className='btndrop' style={{fontFamily:'El messiri'}}>من الاعلي سعرا الي الاقل </div>
    <div onClick={()=>click("من الاقل سعرا الي الاعلي")}  className='btndrop' style={{fontFamily:'El messiri'}}>من الاقل سعرا الي الاعلي</div>
    <div onClick={()=>click("بدون ترتيب")}  className='btndrop' style={{fontFamily:'El messiri'}}>بدون ترتيب</div>
    <div onClick={()=>click("الاعلي تقيما")}  className='btndrop' style={{fontFamily:'El messiri'}}>الاعلي تقيما</div>

  </div>
</UnopDropdown>
</div>
  )
}

export default SearchResult
