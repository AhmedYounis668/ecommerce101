import React from 'react'
import { Link } from 'react-router-dom'
const CategouryCard = ({title,img,id}) => {
    
  return (


     <div class="myCard my-2" >
<Link to={`/Productsbyonecatsearch/${id}`} style={{textDecoration:'none'}}>
        <div class="innerCard">
            <div class="frontSide">
                {/* <p class="title">FRONT SIDE</p> */}
                <img src={img} style={{width:'100%',height:'100%'}}/>
                <p  style={{color:'#54ff9f'}}>{title}</p>
            </div>
            <div class="backSide">
                <p class="title" style={{color:'#54ff9f'}}>{title}</p>

            </div>
        </div>
        </Link>
    </div>

  )
}

export default CategouryCard
