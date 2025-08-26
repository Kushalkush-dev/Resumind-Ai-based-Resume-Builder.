import ResumeForm from '@/components/Custom-components/ResumePreview components/ResumeForm'
import Resumepreview from '@/components/Custom-components/ResumePreview components/Resumepreview'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import dummydata from '@/data/dummydata'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ResumeEdit = () => {
  useParams()
  const [resumeInfo, setresumeInfo] = useState(dummydata)

  return (

    
    <>
    <ResumeInfoContext.Provider value={{resumeInfo,setresumeInfo}}>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-7 p-9'>

    <ResumeForm/>

    <Resumepreview/>
    

    </div>

    </ResumeInfoContext.Provider>
   

    </>

    
  )
}

export default ResumeEdit