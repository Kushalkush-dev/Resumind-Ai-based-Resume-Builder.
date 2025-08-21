import Header from '@/components/Custom-components/Header'
import { useUser } from '@clerk/clerk-react'
import React from 'react'

const Home = () => {

  const {user,isSignedIn}=useUser()
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Home