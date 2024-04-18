import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import logo from './images/logo.png'
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaCartShopping } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";
import '../layout/css/navbar.css'
import { NavLink } from 'react-router-dom';
import Login from './Login';

import { RiMenu2Fill } from "react-icons/ri";
import '../layout/css/burgerMenu.css'
import NavMenu from './NavMenu';
import NavLogin from './NavLogin';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(true);//Baslangicda Menu gosterilsin



  const handleMenuClick = () => {
    setShowMenu(true)
  }
  const handleLoginClick = () => {
    setShowMenu(false)
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }
  const toggleLogin = () => {
    setLoginOpen(!loginOpen)
  }
  const closeLogin = () => {
    setLoginOpen(false)
  }




  // Basketde productun sayi ucun
  const cartTotalQuantity = useSelector(state => state.cart.cartTotalQuantity);

  return (
    <>
      <header>
        <div className='container'>
          {menuOpen && <div className="blur-background" onClick={closeMenu}></div>}
          <div className='icon-burger' onClick={toggleMenu}>
            <span><BiMenuAltLeft /></span>
          </div>
          <div className={`burger-list ${menuOpen ? 'active' : ''}`}>
            <div className='burgerMenu'>
              <div>
                <div className='buttons'>
                  <div onClick={() => setShowMenu(true)} style={{
                    background: showMenu ? 'black' : 'white',
                    color: showMenu ? 'white' : 'black'
                  }}>
                    <span className='burger-btn'><RiMenu2Fill /></span>
                    <span>Menu</span>
                  </div>
                  <div onClick={() => setShowMenu(false)} style={{
                    background: !showMenu ? 'black' : 'white',
                    color: !showMenu ? 'white' : 'black'
                  }}>
                    <span><FaRegUser /></span>
                    <span>Login</span>
                  </div>
                </div>
                {showMenu ? <NavMenu closeMenu={closeMenu} /> : <NavLogin />}
                {menuOpen && <button className="close-btn" onClick={closeMenu}>Close</button>}
              </div>
            </div>
          </div>
          <div>
            <NavLink to={'/'}>
              <img width={150} src={logo} alt="" />
            </NavLink>
          </div>
          <ul className='navbar-list'>
            <NavLink className='link' to={'/'}>
              <li>Home</li>
            </NavLink>
            <NavLink className='link' to={'/about'}>
              <li>About</li>
            </NavLink>
            <NavLink className='link' to={'/shop'}>
              <li>Shop</li>
            </NavLink>
            <NavLink className='link' to={'/'}>
              <li>Blog</li>
            </NavLink>
            <NavLink className='link' to={'/contact'}>
              <li>Contact</li>
            </NavLink>
          </ul>
          <div className='icons'>
            <span><IoSearch /></span>
            <span className='icon-none' onClick={toggleLogin}><FaRegUser /></span>
            <span className='icon-none'><FaRegHeart /></span>
            <NavLink to={'/basket'}>
              <div className='basket'>
                <span><FaCartShopping /></span>
                <span className='basket-count'>{cartTotalQuantity}</span>
              </div>
            </NavLink>
          </div>
          {loginOpen && <div className="blur-background" onClick={closeLogin}></div>}
          <div className={`login-page ${loginOpen ? 'active' : ''}`}>
            <Login />
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar