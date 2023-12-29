import React from 'react'
import rightarrow from '../../images/prev.png'
const RightArrow = (onClick,onDisable) => {
  return (
    <img
    alt='left arrow'
    src={rightarrow}
    onClick={onClick}
    onDisable={onDisable}
    width='35px'
    height='35px'
    style={{float:'right',cursor:'pointer',marginTop:'220px'}}
    
          />
  )
}

export default RightArrow
