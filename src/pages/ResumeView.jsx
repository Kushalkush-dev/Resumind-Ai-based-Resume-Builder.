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

const ResumeView = () => {


  
  const [resumeInfo, setresumeInfo] = useState(dummydata)

  const {resumeId}=useParams()

useEffect(() => {
  const fetchData = async () => {
    const res = await globalApi.fetchResumeDetails(resumeId);
    const data = res.data;
    console.log(data);
    setresumeInfo({...resumeInfo,...data});
  };
  fetchData();
}, []);

 const downloadResume=()=>{
  window.print();
 }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
    
      <div className="no-print w-full flex flex-col items-center mb-4">
        <Header />
        <div className="flex justify-between w-full max-w-3xl mt-4">
          <Button onClick={downloadResume} className="mr-2"><Download />Download</Button>


 <RWebShare
        data={{
          text: "Check out my resume created with Resumind!",
          url: import.meta.env.VITE_BASE_URL+`/myresume/${resumeId}/view`,
          title: resumeInfo?.title || "My Resume",
        }}
        onClick={() => console.log("shared successfully!")}
      >
          <Button><Share2Icon />Share</Button>
        
      </RWebShare>


        </div>
      </div>
      <ResumeInfoContext.Provider value={{ resumeInfo, setresumeInfo }}>
       
        <div className="w-full md:w-3/4 lg:w-2/3 max-h-max resume-print">
          <Resumepreview />
        </div>
      </ResumeInfoContext.Provider>
    </div>
  )
}



export default ResumeView