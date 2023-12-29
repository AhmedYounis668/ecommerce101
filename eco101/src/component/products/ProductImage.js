import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { useParams } from 'react-router-dom';
import GetOneProductData from '../../hook/products/GetOneProductData';
const ProductImage = () => {
const {id}=useParams()
const[oneproduct,images]=GetOneProductData(id)


  return (

   
      <div className='galaryshadow img '>

      <ImageGallery  items={images}
      showFullscreenButton={false}
      showThumbnails={false}
      showPlayButton={false}
      isRTL={true}
      renderLeftNav={LeftArrow}
      renderRightNav={RightArrow}
      
             />
   
      </div>
      
      
    
  )
}

export default ProductImage
