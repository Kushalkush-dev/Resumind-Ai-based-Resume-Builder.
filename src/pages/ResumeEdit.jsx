import ResumeForm from '@/components/Custom-components/ResumePreview components/ResumeForm'
import Resumepreview from '@/components/Custom-components/ResumePreview components/Resumepreview'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import dummydata from '@/data/dummydata'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import globalApi from './../../service/globalApi'

const ResumeEdit = () => {

  const param=useParams()
  
  const [resumeInfo, setresumeInfo] = useState(dummydata)


  useEffect(()=>{
    fetchresumeDetails()
  },[])

  const fetchresumeDetails=async()=>{
    try {
      const res=await globalApi.fetchResumeDetails(param.resumeId)

      const data=res.data
      setresumeInfo({...resumeInfo,...data, 
      firstName: data.firstName ? data.firstName : resumeInfo.firstName,
      lastName: data.lastName ? data.lastName : resumeInfo.lastName,
      jobTitle: data.jobTitle ? data.jobTitle : resumeInfo.jobTitle,
      address: data.address ? data.address : resumeInfo.address,
      phone: data.phone ? data.phone : resumeInfo.phone,
      email: data.email ? data.email : resumeInfo.email,
      summary: data.summary ? data.summary : resumeInfo.summary,
      themeColor: data.themeColor ? data.themeColor : resumeInfo.themeColor,
      skills: data.skills?.length > 0 ? data.skills : resumeInfo.skills,
      experience: data.experience?.length > 0 ? data.experience : resumeInfo.experience,
      education: data.education?.length > 0 ? data.education : resumeInfo.education,})
      
      console.log(res.data)

      
    } catch (error) {
      console.error("Error fetching details from frontend")
      
    }
  }

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