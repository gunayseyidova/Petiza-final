import React from 'react'
import Main from './Main/Main'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

const router =createBrowserRouter([
  {
    element:<Main/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        
      }
    ]
  }
])

const App = () => {
  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
