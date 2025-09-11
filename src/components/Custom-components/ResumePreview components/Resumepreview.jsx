import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext, useState } from 'react'

const Resumepreview = () => {
  
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)
  return (
    <div>
      {/* personal info */}

      <div className='shadow-lg p-10 border-t-[20px] h-auto '
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

      <p className='text-xs font-medium overflow-ellipsis'>{resumeInfo.summary}</p>

      {/* experience */}
      <div className='my-2'>
      <h2 className='font-sans font-medium text-lg text-center'>Experience</h2>
      <hr className='border-2' style={{borderColor:resumeInfo.themeColor}}/>

      {resumeInfo?.experience?.map((experience,index)=>(
        <div className="my-2.5" key={index}>
          <h2 className='text-md font-medium'>{experience.title}</h2>
          <div className='flex justify-between'>
            <h3 className='text-xs font-medium'>{experience.companyName},{experience.city},{experience.state}</h3>
            <h3 className='text-xs font-medium' >{experience.startDate} to {experience.endDate?experience.endDate:"Present"}</h3>
          </div>

          <div className='text-xs font-medium my-2 resume-previewPoints' dangerouslySetInnerHTML={{__html:experience.workSummary}}/>
           
        </div>
    
      ))}
      </div>
      {/* education */}

      
       <div className='my-2'>
      <h2 className='font-sans font-medium text-lg text-center'>Education</h2>
      <hr className='border-2' style={{borderColor:resumeInfo.themeColor}}/>

      {resumeInfo?.education?.map((education,index)=>(
        <div className='my-2.5' key={index}>
          <h2 className='text-md font-semibold'>{education.universityName}</h2>
          <div className='flex justify-between'>
            <h3 className='text-xs font-medium'>{education.degree} in {education.major}</h3>

            <h3 className='text-xs font-medium'>{education.startDate} - {education.endDate}</h3>

          </div>

          <div className='text-xs font-medium my-2 resume-previewPoints' dangerouslySetInnerHTML={{__html:education.description}}/>
    
        </div>
      ))}

      </div>

      {/* skills */}
     <div className='my-2'>
      <h2 className='font-sans font-medium text-lg text-center'>Skills</h2>
      <hr className='border-2' style={{borderColor:resumeInfo.themeColor}}/>

      <div className='grid grid-cols-2 gap-4 my-4'>
         {resumeInfo?.skills?.map((skill,index)=>(
      <div key={index} className='flex items-center justify-between'>

        <h2 className='text-sm font-medium'>{skill?.name}</h2>
        <div className='h-2 bg-gray-300 w-[100px] rounded-2xl'>
          <div className='h-2 rounded-2xl'style={{backgroundColor:resumeInfo.themeColor,
                                   width:(skill?.rating*20)+'%'}}></div>
        </div>

      </div>
      )
      )}
      </div>
     

      </div>

    </div>
    </div>
  )
}

export default Resumepreview