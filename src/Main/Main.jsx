import React from 'react'
import Navbar from '../layout/Navbar'
import Home from '../Pages/Home/Home'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <main>
        <Navbar />
        <main>
          
          <Outlet/>

        </main>
        <Footer/>
      </main>

    </>
  )
}

export default Main