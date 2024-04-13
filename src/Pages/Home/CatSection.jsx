import React from 'react'
import {NavLink} from 'react-router-dom'
import './Css/catSection.css'
import './Css/text.css'
const Content = () => {
  return (
    <>
    <div className='bg cat1'>
        <div className='bg-content cat1-text'>
            <h2>For all pet</h2>
            <h4>Detail defined</h4>
            <NavLink to={'/shop'}>
            <button>Shop now</button>
            </NavLink>
        </div>
    </div>
    </>
  )
}

export default Content