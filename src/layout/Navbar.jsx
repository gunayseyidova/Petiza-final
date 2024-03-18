import React, {  useState } from 'react'
import logo from './images/logo.png'
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { BiMenuAltLeft } from "react-icons/bi";
import '../layout/css/navbar.css'
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';
import Login from './Login';
const Navbar = () => {

  const[menuOpen,setMenuOpen]=useState(false);
  const[loginOpen,setLoginOpen]=useState(false)

  const toggleMenu=()=>{
    setMenuOpen(!menuOpen)
  }
  const closeMenu=()=>{
    setMenuOpen(false)
  }
  const toggleLogin=()=>{
    setLoginOpen(!loginOpen)
  }
  const closeLogin=()=>{
    setLoginOpen(false)
  }

 
  return (
    <>
      <header>
        <div className='container'>
        {menuOpen &&<div className="blur-background" onClick={closeMenu}></div>}
          <div className='icon-burger' onClick={toggleMenu} >
          <span><BiMenuAltLeft /></span>
          </div>
          {/* Burger Menu acilmasi ucun responsivde */}
           <div className={`burger-list ${menuOpen? 'active':''}`}>
            <BurgerMenu/>
          </div> 
          
          <div>
            <Link to={'/'}>
            <img width={150} src={logo} alt="" />
            </Link>
            
          </div>
          <ul className='navbar-list'>
            <li>Home</li>
            <li>Shop</li>
            <li>Featured</li>
            <li>Pages</li>
            <li>Blog</li>
          </ul>
          <div className='icons'>
            <span><IoSearch /></span>
            <span className='icon-none' onClick={toggleLogin} ><FaRegUser /></span>
            <span className='icon-none'><FaRegHeart /></span>
            <span><LiaShoppingBagSolid /></span>
          </div>

          {loginOpen &&<div className="blur-background" onClick={closeLogin}></div>}
          <div className={`login-page ${loginOpen?'active':''}`}>
            <Login/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar