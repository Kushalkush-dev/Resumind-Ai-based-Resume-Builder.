import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { Input } from '@/components/ui/input'




const EducationDetails = ({nextBtnState}) => {


  const {resumeInfo,setresumeInfo}=useContext(ResumeInfoContext)


  
  const educationfields={
    unversityName:'',
    startDate:'',
    endDate:'',
    degree:'',
    major:'',
    description:''  
    
  }
  const [educationDetails, seteducationDetails] = useState([educationfields])
  
  
  useEffect(()=>{
    setresumeInfo(educationDetails)
  },[educationDetails])


  return (
     <div className='shadow-lg  border-t-5 border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Experience</h2>
        <Button variant="outline" className={"hover:text-primary"}>Generate Experience</Button>
      </div> 

        <div>
          {educationDetails.map((exp,index)=>(
            <div key={index}>
              <div className='border p-5 my-5'>
                <div className='grid grid-cols-2 gap-10 border p-5 my-5'>
                <div>
                  <label className="font-medium ">Position Title</label>
                  <Input name="title" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">Company Name</label>
                  <Input name="companyName" placeholder="Ex:Microsoft" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">City</label>
                  <Input name="city" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">State</label>
                  <Input name="state" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">Start Date</label>
                  <Input type="month" name="startDate" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">End Date</label>
                  <Input type="month" name="endDate" placeholder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div className='col-span-2'>
                  <label className="font-medium ">WorkSummary</label>
                  <RichTextEditor handleRichTextEditor={(e)=>handleRichTextEditor(e,'workSummary',index)}/>
                  </div>

                
                
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-5 justify-between items-center'>
              <Button type='button' onClick={handleAddMore} variant="outline" className='mt-5 hover:text-primary border-1 border-green-400 hover:scale-105 active:scale-100' >Add more +</Button>
              <Button type='button' onClick={()=>removeExperience(index)} variant='outline' className='mt-5 hover:text-red-500 border-1 border-red-500 hover:scale-105 active:scale-100'>Remove</Button>
                </div>
              <Button type='submit' onClick={onSave} className='mt-5' >{loading?<Loader2 className='animate-spin'/>:"Save"}</Button>
              </div>


              </div>
              
            </div>
          ))}
        </div>



      






    

    </div>

  )
}

export default EducationDetails