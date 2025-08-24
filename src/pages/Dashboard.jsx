import AddResume from '@/components/Custom-components/dashboard_components/AddResume'
import ExistingResumes from '@/components/Custom-components/dashboard_components/ExistingResume'
import { UserButton, useUser } from '@clerk/clerk-react'
import React, { use, useEffect } from 'react'
import globalApi from "./../../service/globalApi"

const Dashboard = () => {

  const {user}=useUser()

  

  useEffect(()=>{

    async function fetchresumes(){
      try {
        if(!user) return console.log("No User");
      const resumes= await globalApi.getResumes(user?.primaryEmailAddress?.emailAddress)
      console.log(resumes);

    } catch (error) {
      console.log("Error fetching Resumes");
    }
    } 

    fetchresumes()
    
  },[user])


  return (
    <>

    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p className='font-semibold'>Build your resume without hassle</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4'>
        <AddResume/>
        <ExistingResumes/>
      </div>
    </div>
   
    </>
  )
}

export default Dashboard