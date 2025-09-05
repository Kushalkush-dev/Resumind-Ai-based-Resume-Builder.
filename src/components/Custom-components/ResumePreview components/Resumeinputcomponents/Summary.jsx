import React, { useContext, useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import globalApi from './../../../../../service/globalApi'
import { useParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'


const Summary = () => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)

  const [summarytext, setsummarytext] = useState(resumeInfo.summary || "")

  const [loading, setloading] = useState(false)

  const param=useParams()

  const onSave = async() => {
     setloading(true)
     try {
     const res=await globalApi.updateResume(param.resumeId,{summary:resumeInfo.summary})  
     if(res){
      setloading(false)
      toast.success("Saved Successfully" ,{className:"!bg-green-500 !text-white"})
     }
     console.log(res);
     
      
    } catch (error) {
      console.log(error);
      toast.error("Error while saving" , {className:"!bg-red-500 !text-white"})
    }finally{
      setloading(false)
      
    }

  }

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
       <Button type='submit' className='mt-5' onClick={onSave}>{loading?<Loader2 className='animate-spin'/>:"Save"}</Button>

    </div>


  )

}

export default Summary