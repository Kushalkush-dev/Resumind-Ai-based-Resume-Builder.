import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext, useState } from 'react'

const Resumepreview = () => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)
  return (
    <div>
      {/* personal info */}

      <div className=''>
        <h2>{resumeInfo.firstName} {resumeInfo.lastName}</h2>
      </div>

      {/* summary */}

      {/* experience */}

      {/* education */}

      {/* skills */}


    </div>
  )
}

export default Resumepreview