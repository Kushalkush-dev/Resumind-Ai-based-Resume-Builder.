import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import RichTextEditor from '../RichTextEditor'

const AddExperience = ({nextBtnState}) => {
  
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
  const [loading, setloading] = useState(false)


useEffect(()=>{
  setresumeInfo((prev=>(
    {...prev,experience:experiencelist})
  ))
},[experiencelist])
  
  
  
  

  const handleChange=(index,event)=>{
    
    const {name,value}=event.target

    const updateList=[...experiencelist]

    updateList[index][name]=value

    setexperiencelist(updateList)


    



  }

  const removeExperience=(currindex)=>{
    if(experiencelist.length===1)return;
    let updateList= [...experiencelist]
    updateList=updateList.filter((exp,index)=>currindex!=index)
    setexperiencelist(updateList)
    
  }

  const handleAddMore=()=>{
  
    setexperiencelist([...experiencelist,experienceFields])
    


  }


  return (
     <div className='shadow-lg  border-t-5 border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Experience</h2>
        <Button variant="outline" className={"hover:text-primary"}>Generate Experience</Button>
      </div> 

        <div>
          {experiencelist.map((exp,index)=>(
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
                  <RichTextEditor/>
                  </div>

                
                
              </div>
              <div className='flex justify-between'>
                
              <Button type='button' variant="outline" className='mt-5 hover:text-primary' onClick={handleAddMore} >Add more +</Button>
              <Button type='button' variant='outline' onClick={()=>removeExperience(index)}>Remove</Button>
              <Button type='submit' className='mt-5' >{loading?<Loader2 className='animate-spin'/>:"Save"}</Button>
              </div>


              </div>
              
            </div>
          ))}
        </div>



      






    

    </div>


  )
}

export default AddExperience