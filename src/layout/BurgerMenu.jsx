import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import '../layout/css/burgerMenu.css'
import NavMenu from './NavMenu';
import NavLogin from './NavLogin';
const BurgerMenu = () => {
    const [showMenu, setShowMenu] = useState(true);//Baslangicda Menu gosterilsin

    const handleMenuClick = () => {
        setShowMenu(true)
    }
    const handleLoginClick = () => {
        setShowMenu(false)
    }
    return (
        <>

            <div className='burgerMenu'>

                <div className='buttons'>
                    <div onClick={handleMenuClick} style={{
                        background: showMenu ? 'black' : 'white',
                        color: showMenu ? 'white' : 'black',
                        border: showMenu? 'none':''
                    }}>
                        <span className='burger-btn'><RiMenu2Fill /></span>
                        <span>Menu</span>
                    </div>
                    <div onClick={handleLoginClick} style={{
                        background: showMenu ? 'white' : 'black',
                        color: showMenu ? 'black' : 'white',
                        border: showMenu? '':'none'
                    }}>
                        <span><FaRegUser /></span>
                        <span>Login</span>
                    </div>
                </div>
                {showMenu ? <NavMenu /> : <NavLogin />}

            </div>
        </>
    )
}

export default BurgerMenu