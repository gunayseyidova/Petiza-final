import React from 'react'
import './Css/collection.css'
import Card from '../../components/Card';
import products from '../../product/product.json'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Collection = () => {

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1500) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: slidesToShow,
    speed: 500,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className='cat-food'>
        <div className='bg-cat'></div>
        <div className='collection-food'>
          <h3>Collection cat food</h3>
          <p>Limited edition. Eco-friendly. Not just for <br />working out</p>

          <div className='card-container'>
            <Slider {...settings}>


              {products.map((product) => {
                return product.id < 5 ? (<>

                  <Card key={product.id}
                    {...product} /></>) : null
              })}

            </Slider>
          </div>
          <NavLink to={'/shop'}>
            <button className='shop-btn'>Shop now</button>
          </NavLink>

        </div>

      </div>



      <div className="dog-food">
        <div className='collection-food dog-collection'>
          <h3>Collection dog food</h3>
          <p>Limited edition. Eco-friendly. Not just for <br />working out</p>

          <div className='card-container'>
            <Slider {...settings}>


              {products.map((product) => {
                return product.id > 4 && product.id < 9 ? (<>

                  <Card key={product.id}
                    {...product} /></>) : null
              })}

            </Slider>
          </div>
          <NavLink to={'/shop'}>
            <button className='shop-btn'>Shop now</button>
          </NavLink>

        </div>
        <div className='bg-dog'></div>

      </div>



    </>
  )
}

export default Collection