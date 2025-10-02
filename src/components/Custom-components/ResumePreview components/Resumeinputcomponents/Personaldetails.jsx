import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext, useState } from 'react'
import globalApi from './../../../../../service/globalApi'
import { useParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { toast } from "sonner"


const Personaldetails = ({ nextBtnState }) => {

  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)


  const [formData, setformData] = useState({})

  const [loading, setloading] = useState(false)

   const [saveBtn, setsaveBtn] = useState(true)

  const param= useParams()
  console.log(param.resumeId);
  
  const handleChange = (e) => {
    setsaveBtn(false)
    const { name, value } = e.target

    setformData({...formData,[name]:value})

    setresumeInfo({ ...resumeInfo, [name]: value })

  }

  const onSave = async (e) => {
    e.preventDefault()
    
    setloading(true)
  
    try {
     const res=await globalApi.updateResume(param.resumeId,formData)  
     if(res){
      setloading(false)
      setsaveBtn(true)
      
      toast.success("Saved Successfully" ,{className:"!bg-green-500 !text-white"})
     }
    // console.log(res);
     
      
    } catch (error) {
      console.log(error);
      toast.error("Error while saving" , {className:"!bg-red-500 !text-white"})
    }finally{
      setloading(false)
      nextBtnState(false)
    }

  }


  return (
    <div className='shadow-lg h-auto border-t-5 border-t-primary mt-5 p-5'>
      <h2 className='text-xl font-bold'>Personal Details</h2>
      <h3 className='text-md'>Get Started by filling basic details</h3>

      <div>
        <form onSubmit={onSave} className='mt-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div>
              <label htmlFor="firstName" className='text-sm'>First Name</label>
              <Input name="firstName" value={resumeInfo.firstName} required type={"text"} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="lastName" className='text-sm'>Last Name</label>
              <Input name="lastName" value={resumeInfo.lastName} required type={"text"} onChange={handleChange} />
            </div>

            <div className='md:col-span-2'>
              <label htmlFor="jobTitle" className='text-sm'>Job Title</label>
              <Input name="jobTitle" value={resumeInfo.jobTitle} required type={"text"} onChange={handleChange} />
            </div>

            <div className='md:col-span-2'>
              <label htmlFor="address" className='text-sm'>Address</label>
              <Input name="address" value={resumeInfo.address} required type={"address"} onChange={handleChange} />
            </div>

            <div className=''>
              <label htmlFor="phone" className='text-sm'>Phone</label>
              <Input name="phone" value={resumeInfo.phone} required type={"tel"} onChange={handleChange} />
            </div>

            <div className=''>
              <label htmlFor="email" className='text-sm'>Email</label>
              <Input name="email" value={resumeInfo.email} required type={"email"} onChange={handleChange} />
            </div>


          </div>
          <Button type='submit' className='mt-5' disabled={saveBtn}>{loading?<Loader2 className='animate-spin'/>:"Save"}</Button>
        </form>
      </div>

      
    </div>

    
  )
}

export default Personaldetails