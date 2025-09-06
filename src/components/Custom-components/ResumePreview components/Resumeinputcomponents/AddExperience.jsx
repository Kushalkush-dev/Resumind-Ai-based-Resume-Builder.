import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { useContext } from 'react'
import RichTextEditor from '../RichTextEditor'

const AddExperience = ({nextBtnState}) => {

  const [loading, setloading] = useState(false)

  const experienceFields={
    title: '',
    companyName:'',
    city: '',
    state:'',
    startDate: '',
    endDate: '',
  }
  const {resumeInfo,setresumeInfo}=useContext(ResumeInfoContext)

  const [experiencelist, setexperiencelist] = useState([experienceFields])

  return (
     <div className='shadow-lg  border-t-5 border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Experience</h2>
        <Button variant="outline" className={"hover:text-primary"}>Generate Experience</Button>
      </div> 

        <div>
          {experiencelist.map((exp,index)=>(
            <div>
              <div className='grid grid-cols-2 gap-10 border p-5 my-5'>
                <div>
                  <label className="font-medium ">Position Title</label>
                  <Input name="title" placeHolder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">Company Name</label>
                  <Input name="companyName" placeHolder="Ex:Microsoft" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">City</label>
                  <Input name="city" placeHolder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                 <div>
                  <label className="font-medium ">State</label>
                  <Input name="state" placeHolder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">Start Date</label>
                  <Input type="date" name="startDate" placeHolder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">End Date</label>
                  <Input type="date" name="endDate" placeHolder="Ex:Senior Developer" onChange={(event)=>handleChange(index,event)}/>
                </div>

                  <div>
                  <label className="font-medium ">Work Summary</label>
                  <RichTextEditor/>
                  </div>

                
                
              </div>
              <div className='flex justify-between'>
                
              <Button type='button' variant="outline" className='mt-5' >Add more +</Button>
              <Button type='submit' className='mt-5' >{loading?<Loader2 className='animate-spin'/>:"Save"}</Button>
              </div>
            </div>
          ))}
        </div>



      






    

    </div>


  )
}

export default AddExperience