import React, { useState } from 'react'
import logo from './images/logo.png'
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaCartShopping } from "react-icons/fa6";
import { BiMenuAltLeft } from "react-icons/bi";
import '../layout/css/navbar.css'
import BurgerMenu from './BurgerMenu';
import { NavLink } from 'react-router-dom';
import Login from './Login';
const Navbar = () => {

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


  return (
    <>
      <header>
        <div className='container'>
          {menuOpen && <div className="blur-background" onClick={closeMenu}></div>}
          <div className='icon-burger' onClick={toggleMenu} >
            <span><BiMenuAltLeft /></span>
          </div>
          {/* Burger Menu acilmasi ucun responsivde */}
          <div className={`burger-list ${menuOpen ? 'active' : ''}`}>
            <BurgerMenu />
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
            <NavLink className='link' to={'/blog'}>
              <li>Blog</li>
            </NavLink>
            <NavLink className='link' to={'/contact'}>
              <li>Contact</li>
            </NavLink>
          </ul>
          <div className='icons'>
            <span><IoSearch /></span>
            <span className='icon-none' onClick={toggleLogin} ><FaRegUser /></span>
            <span className='icon-none'><FaRegHeart /></span>
            <span><FaCartShopping /></span>
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