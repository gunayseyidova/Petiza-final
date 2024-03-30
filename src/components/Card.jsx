import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaCartShopping } from "react-icons/fa6";
import './css/card.css'

const Card = ({id,title,discount,priceLast,price,image}) => {
  return (
    <>

        <div className="card" key={id}>
        <div className='card-image' style={{backgroundImage:`url(${image})`}}>
          <div className='discount'>
            <p>-{discount}%</p>
          </div>
          <div className='card-icons'>
            <div><FaCartShopping /></div>
            <div><IoSearch /></div>
            <div><FaRegHeart /></div>
          </div>
        </div>
        <div className='card-text'>
          <p>{title}</p>
          <span>${priceLast}</span>
          <span>${price}</span>
        </div>
      </div>

  

    </>
  )
}

export default Card