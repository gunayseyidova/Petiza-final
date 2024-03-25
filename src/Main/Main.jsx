import React from 'react'
import Navbar from '../layout/Navbar'
import CatSection from '../Pages/Home/CatSection'
import CatSection2 from '../Pages/Home/CatSection2'
import DogSection from '../Pages/Home/DogSection'

const Main = () => {
  return (
   <>
   <main>
    <Navbar/>
    <CatSection/>
    <CatSection2/>
    <DogSection/>
   </main>

   </>
  )
}

export default Main