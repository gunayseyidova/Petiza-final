import React, { useEffect } from 'react';
import { FaTrashCan } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from '../features/cartSlice';
import './css/basket.css'

const Basket = () => {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])


  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }


  return (
    <>
      <div>
        <h2>Basket</h2>
        {cart.cartItems.length === 0 ?
          (
            <div className='cart-empty'>
              <p>Your cart is currently empty</p>
                <NavLink to={'/shop'}>
                  <span>Start shopping</span>
                </NavLink>
            </div>
          ) : (

            <div>

              <div className="cart-items">
                <h2>Shopping Cart</h2>
                {cart.cartItems?.map(cartItem => (
                  <div className='cart-container' key={cartItem.id}>

                    <div className='cart-box'>
                      <div className='box-left'>
                        <img src={cartItem.image} alt="#" />
                        <div>
                          <div className='text'>
                            <h4>{cartItem.title}</h4>
                          </div>
                          <div className='cart-quantity'>
                            <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                            <span>{cartItem.cartQuantity}</span>
                            <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                          </div>
                        </div>

                      </div>

                      <div className='total'>
                        <span>Total:<span> ${cartItem.price * cartItem.cartQuantity}</span></span>
                      <button className='remove' onClick={() => handleRemoveFromCart(cartItem)}><FaTrashCan /></button>
                      </div>

                    </div>


                  </div>

                ))}
              </div>

              <div className='summary'>
                <button onClick={() => handleClearCart()}>Clear</button>
                <div className='subtotal'>
                  <span>Subtotal:</span>
                  <span>${cart.cartTotalAmount}</span>
                </div>
              </div>
            </div>

          )}
      </div>
    </>
  )
}

export default Basket