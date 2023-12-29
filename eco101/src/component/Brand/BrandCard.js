import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const BrandCard = ({img,title,id}) => {
  return (
 

    <div class="cardbrand">
    <Link to={`/productbyonebrand/${id}`} style={{textDecoration:'none'}}>
  <div class="firstcardbrand-content">
   <img variant="top" src={img}  style={{width:'100%',height:'100%',borderRadius:'10px'}}/>
    
  </div>
  <div class="secondcardbrand-content">
<span style={{color:"#54ff9f"}}>{title}</span>  
</div>
</Link>


</div>
  )
}

export default BrandCard
