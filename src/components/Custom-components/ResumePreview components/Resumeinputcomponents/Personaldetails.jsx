import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext } from 'react'

const Personaldetails = () => {

  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full border-t-5 border-t-primary mt-5 p-5'>
      <h2 className='text-xl font-bold'>Personal Details</h2>
      <h3 className='text-md'>Get Started by filling basic details</h3>

    </div>
  )
}

export default Personaldetails