import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import logo from '../../images/logo.png'
import NavbarSearchHook from '../../hook/search/NavbarSearchHook';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getallcatrtaction } from '../../Redux/Actions/CardAction';
const NavbarLogin = () => {
  const dispatch=useDispatch()
  const[user,setuser]=useState('')

  const [onsearchchange,searchword]=NavbarSearchHook();
  let word="";
  if(localStorage.getItem("searchword")!=null)
  {
  word=localStorage.getItem("searchword")
  }


 
useEffect(()=>{
  if(JSON.parse(localStorage.getItem("user"))!=null)
  {
    setuser(JSON.parse(localStorage.getItem("user")))
  }
},[])

const logout=()=>{
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  setuser('')

}
  useEffect(()=>{
    const get=async()=>{
    await  dispatch(getallcatrtaction())

    }
    get()
  },[])


const resgetdatacart=useSelector(state=>state.allcart.getallcart)
let numberofcart=0;
if(resgetdatacart&&resgetdatacart.data&&resgetdatacart.data.data)
{
numberofcart=resgetdatacart.data
}
else
{
numberofcart=0
}
  return (
    <div  className='navbarground'>
    <Navbar expand="lg ">
      <Container fluid >
      <div className='col-12 col-md-1 text-center d-flex justify-content-center'>
        <Navbar.Brand href="/" className='d-flex justify-content-center w-100'><img src={logo} alt='logo' style={{height:'50px',textAlign:'center'}} /></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav

            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
         

          
          </Nav>
          <div className='col-12 col-md-8'>

          <Form className="d-flex w-100 ">
            <Form.Control
            value={word}
            onChange={onsearchchange}
              type="search"
              placeholder="Search"
              className="me-2 text-center"
              aria-label="Search"
              id='navv'
            />
            

          </Form>
          </div>

          <div className='col-12 col-md-3 d-flex justify-content-center mx-2 my-3'>
        
        {
          user!=""?(
user?(  <Dropdown>
      <Dropdown.Toggle   style={{textAlign:'center'}}>
        {user.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {
        user.role==="admin"?(        <Dropdown.Item style={{fontFamily:'El Messiri',color:'royalblue'}} href="/AdminAllorders">لوحه التحكم</Dropdown.Item>
):(        <Dropdown.Item style={{fontFamily:'El Messiri',color:'royalblue'}} href="/Userpageallorders">الصفحه الشخصيه</Dropdown.Item>
)
      }
        
        
        
        <Dropdown.Item onClick={logout} style={{fontFamily:'El Messiri',color:'royalblue'}}  href="/login">تسجيل الخروج</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>):( <a href='/login' style={{textDecoration:'none'}}> 
          <div className='fs-4 mx-3'>  <span  style={{fontFamily:'El Messiri',color:'blue',cursor:"pointer"}} className='mx-2 fs-5'>دخول</span><i class="fa-solid fa-user" style={{color:'#8c91a6',cursor:'pointer'}}></i> </div> 
          </a>)
          ):<a href='/login' style={{textDecoration:'none'}}> 
          <div className='fs-4 mx-3'>  <span  style={{fontFamily:'El Messiri',color:'blue',cursor:"pointer"}} className='mx-2 fs-5'>دخول</span><i class="fa-solid fa-user" style={{color:'#8c91a6',cursor:'pointer'}}></i> </div> 
          </a>
      

        }
         
         
        
        <a href="/card">
          <div style={{marginTop:'-15px',marginLeft:'auto',marginRight:'auto'}} className=' mx-3'>
          <h6 >
        <Badge  style={{marginRight:'4px'}}>{numberofcart.numOfCartItems||0}</Badge>
      </h6>
      <i class="fa-solid fa-cart-shopping fa-lg fs-2" style={{color:'#8c91a6',marginTop:'6px',position:'absolute',cursor:'pointer'}}> </i></div>
        </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarLogin
