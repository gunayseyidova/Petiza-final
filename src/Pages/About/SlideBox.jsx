import React from 'react'
import slideImage from '../../product/slide.json'
import './Css/slideBox.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideBox = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    speed: 500,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {
          slideImage.map((item) => {
            return(
              <div className='slide-img-parent'>
              <div className='slide-img' style={{ backgroundImage: `url(${item.image})` }}>

              </div>
            </div>
            )
           
          })
        }

      </Slider>

    </>
  )
}

export default SlideBox