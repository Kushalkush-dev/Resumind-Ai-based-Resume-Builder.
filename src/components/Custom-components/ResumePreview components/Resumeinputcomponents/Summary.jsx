import React, { useContext, useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'


const Summary = () => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)

  const [summarytext, setsummarytext] = useState(resumeInfo.summary || "")


  useEffect(()=>{
     setresumeInfo({ ...resumeInfo, summary: summarytext })

  },[summarytext])
 

  
  return (
    <div className='shadow-lg h-full border-t-5 border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Summary</h2>
        <Button variant="outline" className={"hover:text-primary"}>Generate Summary</Button>
      </div> 
      <div>
        <Textarea Value={resumeInfo.summary} onChange={(e)=>setsummarytext(e.target.value)}/>
      </div>


    </div>


  )

}

export default Summary