import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
  const {user,isSignedIn}=useUser()
  return (
    <>
    <div className='flex w-full justify-center items-center'>
    <div className='flex justify-between p-2 shadow-2xl h-max mt-1.5  rounded-2xl w-4/5 '>
      <img src="logo.svg" alt="logo" width={150} height={150} />

      {!isSignedIn?(<Link to={'/auth/sign-in'}>
      <Button variant="outline">Get Started</Button>
      
      </Link> )
      :(
        <Link to={'/dashboard'}>
        <div className='flex items-center gap-1'>
          <Button variant="outline">Dashboard</Button>
          <UserButton/>
        </div>

        </Link>
      )}
      

    </div>

    </div>
    </>
  )
}

export default Header