import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

 import { ClerkProvider } from '@clerk/clerk-react'

import SignInPage from './auth/signin/SignIn.jsx'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publisable Key")
}

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


  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router}/>

  </ClerkProvider>

 
 
 
)
