import Header from '@/components/Custom-components/Header'
import Resumepreview from '@/components/Custom-components/ResumePreview components/Resumepreview'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import dummydata from '@/data/dummydata'
import { Download, Share2Icon } from 'lucide-react'
import React, { useContext, useState } from 'react'

const ResumeView = () => {

  const[resumeInfo,setresumeInfo]=useState(dummydata)

  return (
    <div>
      <Header/>

      <ResumeInfoContext.Provider value={{resumeInfo,setresumeInfo}}>

    <div className='w-full h-screen '>

     
    
    <div className='flex w-full justify-center items-center min-h-screen '>

    <div className='w-full md:w-3/4 lg:w-2/3  p-5'>
    <div className='flex justify-between mb-3'>
      <Button><Download/>Download</Button>
      <Button><Share2Icon/>Share</Button>
    </div>   
      <Resumepreview/>

    </div>

    </div>
    </div>

        
      </ResumeInfoContext.Provider>


    </div>
  )
}



export default ResumeView