import React from 'react'
import './Css/slideBox.css'
import { FaInstagram } from "react-icons/fa6";
import {Link} from 'react-router-dom';


const SlideBox = ({image}) => {
 
  return (
    <>
      <div className='box-img' style={{backgroundImage:`url(${image})`}}>
       
      <div className='box-hover'>
        <Link className='link' to={"https://www.instagram.com/"} target='_blank'>
        <FaInstagram />
        </Link>
        </div>
      </div>
    </>
  )
}

export default SlideBox