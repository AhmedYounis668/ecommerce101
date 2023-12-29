import React from 'react'
import mobile from '../../images/mobile.png'
const UserAllorderComponent = () => {
  return (
    <div className='my-4' style={{border:'2px solid royalblue',borderRadius:'10px'}}>
   
<div className='d-flex justify-content-start'>
<div><img src={mobile} style={{width:'100px',height:'95px'}}/></div>


<div>
<p className='breaktext2' style={{fontFamily:'El messiri'}}><span  style={{fontFamily:'El messiri',color:'royalblue',fontWeight:'bold'}}>مواصفات المنتج :</span>dgfdgfdgsadasdsadasdsadsadsadsadsadasdsadasdsadsadsadsadasdasdsadsadsafdgfdgfdgfdgfdgfdg</p>
<p style={{fontFamily:'El messiri',fontWeight:'bold'}} className='justify-content-start d-flex mx-2'><span className='producttextcolor1'>تقيم المنتج : </span> <span className='producttextcolor2'>3.5</span></p>
<p style={{fontFamily:'El messiri',fontWeight:'bold'}} className='justify-content-start d-flex mx-2'><span className='producttextcolor1'> عدد المقيمين  : </span> <span className='producttextcolor2'>168 مقيم</span></p>

<div className='d-flex mx-2'>
    <label style={{marginTop:'12px',fontFamily:'El messiri',color:'royalblue',fontWeight:'bold'}}>الكميه :</label>
    <input style={{width:'80px'}} type='number' className='button-55 mx-2'/>

</div>
</div>
   </div>

    </div>
  )
}

export default UserAllorderComponent
