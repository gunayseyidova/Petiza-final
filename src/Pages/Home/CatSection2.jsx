import React from 'react'
import './Css/text.css'
import './Css/catSection2.css'
import { NavLink } from 'react-router-dom'

const CatSection2 = () => {
  return (
    <>
      <div className='bg cat2'>
        <div className='bg-content cat2-text'>
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

export default CatSection2