import React from 'react'
import leftarrow from '../../images/next.png'
const LeftArrow = (onClick,onDisable) => {
  return (
    

    
      <img

alt='left arrow'
src={leftarrow}
onClick={onClick}
onDisable={onDisable}
width='35px'
height='35px'
style={{float:'left',cursor:'pointer',marginTop:'220px'}}

      />
  )
}

export default LeftArrow
