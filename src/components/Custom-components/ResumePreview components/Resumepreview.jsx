import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext, useState } from 'react'

const Resumepreview = () => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)
  return (
    <div>
      {/* personal info */}

      <div className='shadow-lg p-10 border-t-[20px] h-full '
      style={{borderColor:resumeInfo.themeColor}}>
        <h2 className='text-center font-medium text-xl'>{resumeInfo.firstName} {resumeInfo.lastName}</h2>
        <h2 className='text-center font-medium text-xs'>{resumeInfo.jobTitle}</h2>
        <h2 className='text-center font-medium text-xs'>{resumeInfo.address}</h2>

        <div className='flex justify-between pt-7'>
          <h2>{resumeInfo.phone}</h2>
          <h2>{resumeInfo.email}</h2>
        </div>
      </div>

      {/* summary */}

      {/* experience */}

      {/* education */}

      {/* skills */}


    </div>
  )
}

export default Resumepreview