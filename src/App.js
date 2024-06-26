import React from 'react'
import Main from './Main/Main'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Shop from './Pages/Shop/Shop'
import Details from './components/Details'
import Basket from './components/Basket'

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
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/basket',
        element:<Basket/>
      },
      {
        path:'/shop/:id',
        element:<Details/>
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
