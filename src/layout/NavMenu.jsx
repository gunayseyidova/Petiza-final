import React from 'react'
import '../layout/css/navMenu.css'
import { NavLink } from 'react-router-dom';


const NavMenu = ({ closeMenu }) => {
  return (
        <ul className='navMenu-list'>
        <NavLink to={'/'} onClick={closeMenu}>
          <li>Home</li>
        </NavLink>
        <NavLink to={'/about'} onClick={closeMenu}>
          <li>About</li>
        </NavLink>
        <NavLink to={'/shop'} onClick={closeMenu}>
          <li>Shop</li>
        </NavLink>
        <NavLink to={'/blog'} onClick={closeMenu}>
          <li>Blog</li>
        </NavLink>
        <NavLink to={'/contact'} onClick={closeMenu}>
          <li>Contact</li>
        </NavLink>
      </ul>
  );
};

export default NavMenu;
