import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Signup from './components/Signup'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import MainLayout from './components/MainLayout'
// import { Home } from 'lucide-react'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'

const browserRouter=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/profile/:id',
        element:<Profile />
      },
      {
        path:'/account/edit',
        element:<EditProfile />
      }
    ]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  },

])

function App() {
  

  return (
    <>
      <RouterProvider router={browserRouter} />
      
    </>
  )
}

export default App
