import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
  const {user,isSignedIn}=useUser()

  return (
    <>
    <div className='flex w-full justify-center  items-center'>
    <div className='flex justify-between p-2 shadow-md  mt-1.5 bg-white rounded-2xl w-4/5 '>
    <Link to='/'>
    <img src="/logo.svg" alt="logo" width={150} height={150}  />
    </Link>

      {!isSignedIn?(<Link to={'/auth/sign-in'}>
      <Button className="bg-[#45D2B0] hover:bg-[#2dad90]">Get Started</Button>
      
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