import AddResume from '@/components/Custom-components/dashboard_components/AddResume'
import ExistingResumes from '@/components/Custom-components/dashboard_components/ExistingResume'
import { UserButton, useUser } from '@clerk/clerk-react'
import React, { use, useEffect, useState } from 'react'
import globalApi from "./../../service/globalApi"
import ResumeloadCards from '@/components/Custom-components/dashboard_components/ResumeloadCards'


const Dashboard = () => {

  const {user}=useUser()

  const [userResumes, setuserResumes] = useState([])
  const [loadingResumes, setloadingResumes] = useState(false)

  useEffect(()=>{
    if(!user) return;
    

    fetchresumes()
    
  },[])

  const  fetchresumes=async()=>{
      setloadingResumes(true)
        try {
          if(!user) return console.log("No User");
        const resumes= await globalApi.getResumes(user?.primaryEmailAddress?.emailAddress)
      //  console.log(resumes.data);
        setuserResumes(resumes.data)

      

      } catch (error) {
        console.log("Error fetching Resumes");
      }finally{
        setloadingResumes(false)
      }
      } 
  return (
    <>

    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p className='font-semibold'>Build your resume without hassle</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4'>
        <AddResume/>

        {loadingResumes ?(
          <>
          <ResumeloadCards/>
          <ResumeloadCards/>
          <ResumeloadCards/>
          
          </>
        ):(
          
          userResumes.length>0 && (userResumes.map((resume,index)=>(
            <ExistingResumes key={index} resumedetail={resume} ResumeNum={index+1} refreshResumes={fetchresumes} setloadingResumes={setloadingResumes} />
          )))
        
        )

        }

        

        

      </div>
    </div>
   
    </>
  )
}

export default Dashboard