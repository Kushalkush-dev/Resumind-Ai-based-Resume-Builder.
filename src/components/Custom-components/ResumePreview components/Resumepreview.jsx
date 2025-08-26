import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext, useState } from 'react'

const Resumepreview = () => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)
  return (
    <div>
      {/* personal info */}

      <div className='shadow-lg p-10 border-t-[20px] h-full '
      style={{borderColor:resumeInfo.themeColor}}>
        <h2 className='text-center font-medium text-2xl'>{resumeInfo.firstName} {resumeInfo.lastName}</h2>
        <h2 className='text-center font-medium text-xs'>{resumeInfo.jobTitle}</h2>
        <h2 className='text-center font-medium text-xs'>{resumeInfo.address}</h2>

        <div className='flex justify-between pt-7'>
          <h2>{resumeInfo.phone}</h2>
          <h2>{resumeInfo.email}</h2>
        </div>
      
       <hr className='border-2 my-1.5' style={{borderColor:resumeInfo.themeColor}}/>
      {/* summary */}

      <p className='text-xs font-medium'>{resumeInfo.summary}</p>

      {/* experience */}
      <div className='my-2'>
      <h2 className='font-sans font-medium text-lg text-center'>Experience</h2>
      <hr className='border-2' style={{borderColor:resumeInfo.themeColor}}/>

      {resumeInfo.experience.map((experience,index)=>(
        <div className="my-2.5" key={index}>
          <h2 className='text-md font-medium'>{experience.title}</h2>
          <div className='flex justify-between'>
            <h3 className='text-xs'>{experience.companyName},{experience.city},{experience.state}</h3>
            <h3 className='text-xs'>{experience.startDate},{experience.endDate?experience.endDate:"Present"}</h3>
          </div>
           <p className='text-xs font-medium my-2'>{experience.workSummary}</p>
        </div>
        

      ))}
      </div>
      {/* education */}

      {/* skills */}

    </div>
    </div>
  )
}

export default Resumepreview