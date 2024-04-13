import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaCartShopping } from "react-icons/fa6";
import './css/card.css'
import {useDispatch} from 'react-redux'
import { addToCart } from '../features/cartSlice';

const Card = ({ id, title, discount, priceLast, price, image }) => {

const navigate = useNavigate(); 
const dispatch = useDispatch();

const handleAddToCart = (product) =>{
    navigate('/basket')
    dispatch(addToCart(product))
    console.log(product)
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
              <div onClick={()=>handleAddToCart({ id, title, discount, priceLast, price, image }) }><FaCartShopping /></div>
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