import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getallcatrtaction } from '../../Redux/Actions/CardAction'

const PaymentWay = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    const get=async()=>{
    await  dispatch(getallcatrtaction())

    }
    get()
  },[])


const resgetdatacart=useSelector(state=>state.allcart.getallcart)
console.log(resgetdatacart)

let cartitem=[]
let allcartdata=[]
if(resgetdatacart&&resgetdatacart.data&&resgetdatacart.data.data)
{
  cartitem=resgetdatacart.data.data
  allcartdata=resgetdatacart
}
else
{
  cartitem=[]
  allcartdata=[]
}

console.log(allcartdata)
let totalprice;
let totalpriceafterdiscount;
if(allcartdata&&allcartdata.data&&allcartdata.data.data)
{

   totalprice=allcartdata.data.data.totalCartPrice
   totalpriceafterdiscount=allcartdata.data.data.totalAfterDiscount
}
  return (
    <Container style={{minHeight:'850px'}}>
    <Row  style={{border:'2px solid royalblue',fontSize:'16px',color:'royalblue',fontFamily:'El Messiri'}} className='w-100 button-2 justify-content-center headerdonepurchases'>
    <div style={{fontFamily:'El Messiri'}}>
اختر طريقه دفع
</div>
    </Row>


    <div className='button-2 col-12 justify-content-start my-3'>




<div className="radio-input flex-column">


  <div class="radio-input">
  <label class="label">
    <input type="radio" name="radio" />
    <span class="check"></span>
    <span className='m-2' style={{fontSize:'17px',fontFamily:'El messiri',color:'royalblue'}}>دفع كاش</span>
  </label>

  </div>

  <div class="radio-input" >
  <label class="label">
    <input type="radio" name="radio"  style={{backgroundColor:'black'}}/>
    <span class="check" ></span>
    <span className='m-2' style={{fontSize:'17px',fontFamily:'El messiri',color:'royalblue'}}>دفع عن طريق فيزا</span>
  </label>

  </div>


  </div>




    </div>


    <div className='d-flex  justify-content-end'>
<div className='button-2 py-3 fs-4 '><span >{totalpriceafterdiscount>=1?(totalpriceafterdiscount):totalprice}</span> L.E</div>

<button style={{height:'50px',textAlign:'center',padding:'10px'}} className='btndone mx-3 '>
    <a style={{color:'black',height:'50px',textAlign:'center',fontFamily:'El messiri'}}>اتمام الشراء<i class="fa-sharp fa-solid fa-check mx-2 fs-3"></i></a>
</button>
</div>
    </Container>
  )
}

export default PaymentWay
