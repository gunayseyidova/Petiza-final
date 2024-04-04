import React from 'react'
import './css/details.css'
import { FaRegHeart } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";


const Details = () => {
  return (
    <>
    <div className='bg-details'>
        <div className='details-container'>
            <div className='detail-image'></div>
            <div className='detail-text'>
               <span> <FaRegHeart /></span>
                <h3>Pedigree Dentastix</h3>
                <span className='price-last'>$23.00 USD</span>
                <span className='price'>$22.00 USD</span>
                <p className='stars'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></p>
                <p>Calf-length dress in airy, textured cotton fabric with a printed pattern Sed hendrerit. Cras risus ipsum, faucibus ut, ullamcorper id, varius estibulum ante ipsum primis in faucibus Product Details Inspired by traditional blockprinting techniques in India, our own in-house design is the vibrant pattern that every closet needs. That's why...</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Details