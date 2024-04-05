import React from 'react'
import './css/details.css'
import { FaRegHeart } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import products from '../product/product.json';
import {useParams} from 'react-router-dom'


const Details = () => {
  const {id}=useParams();
  const product = products.find(item=> parseInt(id) === item.id)
  return (
    <>
    <div className='bg-details'>
        <div className='details-container'>
            <div className='detail-image' style={{backgroundImage:`url(${product.image})`}}></div>
            <div className='detail-text'>
               <span> <FaRegHeart /></span>
                <h3>{product.title}</h3>
                {product.priceLast &&<span className='price-last'>${product.priceLast} USD</span>}
                <span className='price'>${product.price} USD</span>
                <p className='stars'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></p>
                <p>Calf-length dress in airy, textured cotton fabric with a printed pattern Sed hendrerit. Cras risus ipsum, faucibus ut, ullamcorper id, varius estibulum ante ipsum primis in faucibus Product Details Inspired by traditional blockprinting techniques in India, our own in-house design is the vibrant pattern that every closet needs. That's why...</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Details