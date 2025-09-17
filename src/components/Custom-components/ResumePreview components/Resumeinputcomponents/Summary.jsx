import React, { use, useContext, useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import globalApi from './../../../../../service/globalApi'
import { useParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import AiModel from './../../../../../service/AiModel'


const Summary = ({nextBtnState}) => {
  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)

  const [summarytext, setsummarytext] = useState(resumeInfo.summary || "")

  const [loading, setloading] = useState(false)

  const [savebtn, setsavebtn] = useState(true)

  const [generatedSummary, setgeneratedSummary] = useState([])

  const param=useParams()

  useEffect(()=>{
    nextBtnState(true)
    
  },[])
  
  const onSave = async() => {
     setloading(true)
     try {
     const res=await globalApi.updateResume(param.resumeId,{summary:resumeInfo.summary})  
     if(res){
      setloading(false)
      nextBtnState(false)
      setsavebtn(true)
      toast.success("Saved Successfully" ,{className:"!bg-green-500 !text-white"})
     }
     console.log(res);
     
      
    } catch (error) {
      console.log(error);
      toast.error("Error while saving" , {className:"!bg-red-500 !text-white"})
    }finally{
      setloading(false)
      nextBtnState(false)

    }

  }

  useEffect(()=>{
     setresumeInfo({ ...resumeInfo, summary: summarytext })

  },[summarytext])


  
 
const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summary for 3 experience level, Fresher Level and Mid level and Senior Level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"
const GenerateAiSummary=async()=>{

  try {
    const PROMPT=prompt.replace('{jobTitle}',resumeInfo?.jobTitle)
    const res=await AiModel.generateAicontent(PROMPT)
    const toJson=JSON.parse(res.text)
     setgeneratedSummary(toJson)
    
    
    
  } catch (error) {
  console.error("Error getting AI response",error)  
  }finally{
    console.log(generatedSummary);
    
  }

}
  
  return (
    <div className='shadow-lg  border-t-5 h-auto border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Summary</h2>
        <Button onClick={()=>GenerateAiSummary()} variant="outline" className={"hover:text-primary"}>Generate Summary</Button>
      </div> 
      <div>
        <Textarea value={resumeInfo.summary} onChange={(e)=>{setsummarytext(e.target.value) 
                                                              setsavebtn(false)
                                                             }
                                                            
        }/>
      </div>
       <Button type='submit' className='mt-5' disabled={savebtn} onClick={onSave}>{loading?<Loader2 className='animate-spin'/>:"Save"}</Button>
      

      <div className='py-6'>
        {generatedSummary.map((item,index)=>(

        <div key={index} className=' p-3.5 mb-4 rounded-2xl bg-secondary border shadow-md'>
          <h2 className='text-xl py-2 font-medium text-black' style={{
            color:resumeInfo.themeColor
          }}>{item.experience_level}</h2>
          <div className='text-sm text-black'>{item.summary}</div>
        </div>

        ))}

      </div>
    </div>


  )

}

export default Summary