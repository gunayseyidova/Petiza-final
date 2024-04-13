import React from 'react'
import slideImage from '../../product/slide.json'
import './Css/instagram.css'
import {useEffect,useState} from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideBox from './SlideBox';

const Instagram = () => {

  const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1024) {
          setSlidesToShow(4);
        } else if (window.innerWidth > 575 && window.innerWidth <= 1024) {
          setSlidesToShow(3);
        } else {
          setSlidesToShow(2);
        }
      };
    
      // Başlangıç durumunu ayarlamak için fonksiyonu bir kez çağırın
      handleResize(); 
      window.addEventListener("resize", handleResize);
    
      // Komponent kaldırıldığında listener'ı temizle
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: slidesToShow,
        speed: 500,
        slidesToScroll: 1,
    };

    
    return (
        <>
        <div className='insta-header'>
          <h4>Instagram</h4>
          <p>Get the latest news & updates</p>
        </div>
            <Slider {...settings}>
                {
                    slideImage.map((item) => {
                        return (
                            <div className='slide-img-parent'>
                                <SlideBox image={item.image} />
                            </div>
                        )

                    })
                }

            </Slider>
        </>
    )
}

export default Instagram