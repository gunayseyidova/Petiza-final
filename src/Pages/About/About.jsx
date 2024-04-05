import React from 'react'
import './Css/about.css'
import Intro from './Intro'
import ServiceBox from './ServiceBox'
import SlideBox from './SlideBox'


const About = () => {




  return (
    <>
        <div className='bg-about'>
          <h2>About Us</h2>
        </div>
        <Intro/>
        <ServiceBox/>
        <SlideBox/>


    </>


  )
}

export default About