import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { Outlet,useLocation } from 'react-router-dom'
// import { useEffect } from 'react'
const Main = () => {
  // const { pathname } = useLocation()

  //   useEffect(() => {
  //       window.scrollTo(0, 0);
  //   }, [pathname])
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