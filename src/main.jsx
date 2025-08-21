import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SignInPage from './auth/signin/SignIn.jsx'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const router=createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
    ]
  }
  ,

  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  },
  
])

createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}/>
 
)
