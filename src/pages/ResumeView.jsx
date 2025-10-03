import Header from '@/components/Custom-components/Header'
import Resumepreview from '@/components/Custom-components/ResumePreview components/Resumepreview'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import dummydata from '@/data/dummydata'
import { Download, Share2Icon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import globalApi from './../../service/globalApi'
import ResumePreviewSkeleton from '@/components/ResumeLoadcomponent/ResumePreviewSkeleton'

import { PDFDownloadLink } from "@react-pdf/renderer";
import DefaultResume from '@/PdfPreviews/DefaultResume'



const ResumeView = () => {


  
  const [resumeInfo, setresumeInfo] = useState(dummydata)

  const {resumeId}=useParams()

  const [resumeLoad, setresumeLoad] = useState(false)

useEffect(() => {
  const fetchData = async () => {
    setresumeLoad(true)
    const res = await globalApi.fetchResumeDetails(resumeId);
    const data = res.data;
   // console.log(data);
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
    <div className="min-h-screen  flex flex-col items-center py-0 ">
      {/* Header + Buttons (hidden when printing) */}
      <div className="print:hidden w-full flex flex-col items-center mb-6">
        <Header />
        <div className="flex justify-around md:justify-between pt-15 w-full max-w-3xl mt-4">
         <PDFDownloadLink
        document={<DefaultResume resumeInfo={resumeInfo} />}
        fileName="resume.pdf"
      >
        {({ loading }) =>
          loading ? (
            <button className="px-4 py-2 bg-gray-400 text-white rounded-lg">
              Preparing PDF...
            </button>
          ) : (
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Download Resume
            </button>
          )
        }
      </PDFDownloadLink>

          <Button disabled={resumeLoad} onClick={Share} className="flex items-center gap-2">
            <Share2Icon size={18} /> Share
          </Button>
        </div>
      </div>

      {/* Resume Preview */}
      <ResumeInfoContext.Provider value={{ resumeInfo, setresumeInfo }}>
        <div
          className="
            w-[95%] md:w-3/4 lg:w-2/3 
    shadow-lg bg-white rounded-lg 
    print:w-[210mm] print:max-h-[297mm] print:shadow-none print:rounded-none print:m-0
          "
        >
          {resumeLoad ? <ResumePreviewSkeleton /> : <Resumepreview />}
        </div>
      </ResumeInfoContext.Provider>
    </div>
  );
}



export default ResumeView