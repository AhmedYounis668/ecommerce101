import React from 'react'
import { Link } from 'react-router-dom'


const Subtitle = ({title,btntitle,pathtext}) => {
  return (
    
    
    <div className='d-flex justify-content-between my-2 pt-4' >
    {

   title?(<div className='button-2' style={{color:'royalblue',fontWeight:'bold',backgroundColor:'#54ff9f'}}>{title}</div>) :null  
    }
      
      <Link to={`${pathtext}`} style={{textDecoration:'none'}}>
      {

        btntitle? <div  className='button-52  '>{btntitle}</div>:null
      }
</Link>
      </div>

    
  )
}

export default Subtitle
