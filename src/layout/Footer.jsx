import React from 'react'
import '../layout/css/footer.css'
import { NavLink } from 'react-router-dom';
import { BsTelephoneFill } from "react-icons/bs";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdMail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaLocationArrow, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div className='footer-list'>
                        <h5>Shop</h5>
                        <ul>
                            <NavLink className='link' to={'/'}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink className='link' to={'/shop'}>
                                <li>Shop</li>
                            </NavLink>
                            <li>Food for puppies</li>
                            <li>Adult dog food</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div className='footer-list'>
                        <h5>About</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>Address Store</li>
                            <li>Privacy Policy</li>
                            <li>Receivers & Amplifiers</li>
                            <li>Clothings</li>
                        </ul>
                    </div>
                    <div className='footer-list'>
                        <h5>Follow us</h5>
                        <ul>
                            <li><BsTelephoneFill />(646) 663-4575</li>
                            <li><TbDeviceLandlinePhone />(646) 968-0608</li>
                            <li><MdMail />help@engotheme.com</li>
                            <li><FaLocationArrow />1201 Broadway Suite 600</li>
                            <li>
                                <ul className='icons-list'>
                                    <li><FaTwitter /></li>
                                    <li><FaFacebookF /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaYoutube /></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='subs'>
                        <h5>Newsletters</h5>
                        <p>Be the first who learns about our great promotions!</p>
                        <input type="email" placeholder='Enter your email...' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer