import React from 'react'
import './css/details.css'
import { FaRegHeart } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import products from '../product/product.json';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';


const Details = () => {

  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    navigate('/basket')
    dispatch(addToCart(product));
    console.log(product)
  }


  const { id } = useParams();
  const product = products.find(item => parseInt(id) === item.id)
  return (
    <>
      <div className='bg-details'>
        <div className='details-container'>
          <div className='detail-image' style={{ backgroundImage: `url(${product.image})` }}></div>
          <div className='detail-text'>
            <div className='detail-title'>
              <h3>{product.title}</h3>
              <div className='like'> <FaRegHeart/></div>
              </div>
            {product.priceLast && <span className='price-last'>${product.priceLast} USD</span>}
            <span className='price'>${product.price} USD</span>
            <p className='stars'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></p>
            <p className='text'>Calf-length dress in airy, textured cotton fabric with a printed pattern Sed hendrerit. Cras risus ipsum, faucibus ut, ullamcorper id, varius estibulum ante ipsum primis in faucibus Product Details Inspired by traditional blockprinting techniques in India, our own in-house design is the vibrant pattern that every closet needs. That's why...</p>
            <button className='add' onClick={() => handleAddToCart(product)}>Add to cart</button>
            <button className='buy'>Buy it now</button>
          </div>


          <div className='information'>
            <div className='content-text'>
              <h5>Why Choose Us ?</h5>
              <p>Official Herschel stockist Australian warranty assistance & support Australian shipping & returns.Customer first experience environmentally focused</p>
            </div>
            <div className='content-text'>
              <h5>Returns</h5>
              <p>Return this product within 100 days if you change your mind. Get a refund/replacement & free return shipping if it arrives damaged or not as described</p>
            </div>
            <div className='content-text'>
              <h5>Shipping</h5>
              <p>Free if stated near price. $9.95 Australia wide (up to 10 items). $18.95 for Express Post (generally 1 business day).</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details