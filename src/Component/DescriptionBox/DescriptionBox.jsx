import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An E-Commerce website is an online platform that facilitate buying and selling of product or services over the internet serves as a virtual marketplace where business and individuals shocase their product</p>
            <p>E-Commerce website typically display products</p>
        </div>
    </div>
  )
}

export default DescriptionBox