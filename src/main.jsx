import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SignInPage from './auth/signin/SignIn.jsx'
import Home from './pages/Home'

const router=createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
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
