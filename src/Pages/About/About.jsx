import React from 'react'
import './Css/about.css'
import Intro from './Intro'
import ServiceBox from './ServiceBox'
import Instagram from './Instagram'


const About = () => {




  return (
    <>
        <div className='bg-about'>
          <h2>About Us</h2>
        </div>
        <Intro/>
        <ServiceBox/>
        <Instagram/>


    </>


  )
}

export default About