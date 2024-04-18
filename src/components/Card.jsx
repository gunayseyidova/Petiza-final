import React from 'react'
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import './css/card.css'
import { useDispatch } from 'react-redux'
import { addToCart, addToLike } from '../features/cartSlice';

const Card = ({ id, title, discount, priceLast, price, image }) => {

  const [isLiked, setIsLiked] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    console.log(product)
  }

  const handleAddToLike = (product) => {
    setIsLiked(!isLiked)
    dispatch(addToLike(product))
  }
  return (
    <>
      <div className="card" key={id} >

        <div className='card-image-box'>
          <Link to={`/shop/${id}`}>
            <div className='card-image' style={{ backgroundImage: `url(${image})` }}>
              <div className='discount'>
                {discount && (<p>-{discount}%</p>)}
              </div>
            </div>
          </Link>
          <div className='card-icons'>
            <div onClick={() => handleAddToCart({ id, title, discount, priceLast, price, image })}><FaCartShopping /></div>
            <div><IoSearch /></div>
            <div style={{
              color: isLiked ? "#FF4949" : " ",
              backgroundColor: isLiked ? "#fff" : " "
            }} onClick={() => handleAddToLike({ id, title, discount, priceLast, price, image })}><FaHeart /></div>
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