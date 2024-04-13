import React from 'react';
import './Css/text.css';
import './Css/dogSection.css';
import { NavLink } from 'react-router-dom';

const DogSection = () => {
  return (
    <>
      <div className='bg dog'>
        <div className='bg-content dog-text'>
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

export default DogSection