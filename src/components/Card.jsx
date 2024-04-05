import React from 'react'
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaCartShopping } from "react-icons/fa6";
import './css/card.css'

const Card = ({ id, title, discount, priceLast, price, image }) => {
  console.log(id)
  return (
    <>
       <div className="card" key={id} >
     
          <div className='card-image' style={{ backgroundImage: `url(${image})` }}>
            <div className='discount'>
              {discount && (<p>-{discount}%</p>)}
            </div>
            <div className='card-icons'>
              <div><FaCartShopping /></div>
              <div><IoSearch /></div>
              <div><FaRegHeart /></div>
            </div>
          </div>
          <div className='card-text'>
       <Link to={`/shop/${id}`}>
            <p>{title}</p>
        </Link>
            {priceLast && (<span className='price-last'>${priceLast}</span>)}
            <span className='price'>${price}</span>
          </div>
        </div>




    </>
  )
}

export default Card