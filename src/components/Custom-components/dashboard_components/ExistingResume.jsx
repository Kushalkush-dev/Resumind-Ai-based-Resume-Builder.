import React from 'react'
import { Link, Links } from 'react-router-dom'

const ExistingResumes = ({resumeinfo,ResumeNum}) => {
  return (
    <Link to={`/dashboard/resume/${resumeinfo.documentId}/edit`}>
      <div>
      <div className='px-14 py-30  flex items-center justify-center bg-secondary border-red-500 border-2 
                  rounded-lg h-[282px] cursor-pointer hover:scale-105 hover:shadow-lg transition-all'>

        <h3 className='text-sm'>Resume {resumeinfo.title} </h3>

      </div>
                  
    </div>
    </Link>
    
  )
}

export default ExistingResumes