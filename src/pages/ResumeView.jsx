import Header from '@/components/Custom-components/Header'
import Resumepreview from '@/components/Custom-components/ResumePreview components/Resumepreview'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import dummydata from '@/data/dummydata'
import { Download, Share2Icon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import globalApi from './../../service/globalApi'
import { RWebShare } from "react-web-share";
import ResumePreviewSkeleton from '@/components/ResumeLoadcomponent/ResumePreviewSkeleton'

const ResumeView = () => {


  
  const [resumeInfo, setresumeInfo] = useState(dummydata)

  const {resumeId}=useParams()

  const [resumeLoad, setresumeLoad] = useState(false)

useEffect(() => {
  const fetchData = async () => {
    setresumeLoad(true)
    const res = await globalApi.fetchResumeDetails(resumeId);
    const data = res.data;
    console.log(data);
    setresumeInfo({...resumeInfo,...data});
    setresumeLoad(false)
  };
  fetchData();
}, []);

 const downloadResume=()=>{
  window.print();
 }

const Share=async()=>{
  if(navigator.share){
    try {
      
      navigator.share({
        title:resumeInfo.title,
        text:"Check out my Resume Created using Resumind",
        url:`/myresume/${resumeId}/view`
    
      })

      console.log("Shared Successfully");
      
    } catch (error) {
      console.error("Error Sharing",error);
      
    }
  }else{
    alert("Your Browser does not support sharing")
  }

 }
 

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
    
      <div className="no-print w-full flex flex-col items-center mb-4">
        <Header />
        <div className="flex justify-between w-full max-w-3xl mt-4">
          <Button onClick={downloadResume} className="mr-2"><Download />Download</Button>


 
          <Button onClick={Share}><Share2Icon />Share</Button>
        
   


        </div>
      </div>
      <ResumeInfoContext.Provider value={{ resumeInfo, setresumeInfo }}>
       
        <div className="w-full md:w-3/4 lg:w-2/3 max-h-max resume-print">

        {resumeLoad?<ResumePreviewSkeleton/>:  <Resumepreview />
        }
        </div>
      </ResumeInfoContext.Provider>
    </div>
  )
}



export default ResumeView