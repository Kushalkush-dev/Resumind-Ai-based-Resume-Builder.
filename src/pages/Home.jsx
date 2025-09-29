import Header from '@/components/Custom-components/Header'
import LandingPage from '@/components/Custom-components/HomePagecomponent/LandingPage'
import { useUser } from '@clerk/clerk-react'
import React from 'react'

const Home = () => {

  return (
    <div>
      <Header/>
      <LandingPage/>
    </div>
  )
}

export default Home




