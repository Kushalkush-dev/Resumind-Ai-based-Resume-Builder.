import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='flex w-full justify-center items-center'>
    <div className='flex justify-between p-2 shadow-2xl h-max mt-1.5  rounded-2xl w-4/5 '>
      <img src="logo.svg" alt="logo" width={150} height={150} />
      
      <Button variant="outline">Get Started</Button>

    </div>

    </div>
    </>
  )
}

export default Header