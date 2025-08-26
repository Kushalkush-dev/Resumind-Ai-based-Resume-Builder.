import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import React, { useContext } from 'react'

const Personaldetails = () => {

  const handleChange=(e)=>{

    const {name,value}=e.target
    setresumeInfo(...resumeInfo,{[name]:value})
  }

  const onSave=(e)=>{
    e.preventDefault()
  }

  const { resumeInfo, setresumeInfo } = useContext(ResumeInfoContext)
  return (
    <div className='shadow-lg h-full border-t-5 border-t-primary mt-5 p-5'>
      <h2 className='text-xl font-bold'>Personal Details</h2>
      <h3 className='text-md'>Get Started by filling basic details</h3>

      <div>
        <form onSubmit={onSave}>
          <div className='grid grid-cols-2'>

            <div>
              <label htmlFor="firstName" className='text-sm'>First Name</label>
              <Input name="firstName" required type={"text"} onChange={handleChange}/>
            </div>

            <div>
              <label htmlFor="lastName" className='text-sm'>Last Name</label>
              <Input name="lastName" required type={"text"} onChange={handleChange} />
            </div>

            <div className='col-span-2'>
              <label htmlFor="jobTitle" className='text-sm'>Job Title</label>
              <Input name="jobTitle" required type={"text"} onChange={handleChange}/>
            </div>

             <div className='col-span-2'>
              <label htmlFor="address" className='text-sm'>Address</label>
              <Input name="address" required type={"address"} onChange={handleChange}/>
            </div> 

            <div className=''>
              <label htmlFor="phone" className='text-sm'>Phone</label>
              <Input name="phone" required type={"number"} onChange={handleChange}/>
            </div> 

    <div className=''>
              <label htmlFor="email" className='text-sm'>Email</label>
              <Input name="email" required type={"email"} onChange={handleChange}/>
            </div> 


          </div>
        </form>
      </div>
    </div>
  )
}

export default Personaldetails