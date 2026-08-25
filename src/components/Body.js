import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loginpage from './Loginpage'
import Mainpage from './Mainpage'

const Body = () => {
    const approuter=createBrowserRouter([
        {
            path:'/',
            element: <Loginpage />
        },
         {
    path: "/main",
    element: <Mainpage />,
  },
    ])
  return (
    <div>
        <RouterProvider router={approuter} />
    </div>
  )
}

export default Body