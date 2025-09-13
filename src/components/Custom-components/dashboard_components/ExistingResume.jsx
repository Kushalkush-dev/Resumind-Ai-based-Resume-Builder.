import React, { useState } from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'
import { MoreVertical } from 'lucide-react'
import globalApi from './../../../../service/globalApi'
import { toast } from 'sonner'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const ExistingResumes = ({resumedetail,ResumeNum,refreshResumes,setloadingResumes}) => {


  const [opendeleteDialog, setopendeleteDialog] = useState(false)


  const navigate=useNavigate()

  const deleteResume=async()=>{
    try {
      const response=await globalApi.deleteResume(resumedetail.documentId)
      if(response){
        refreshResumes()
        toast.success("Delete Successfull", {className:"!bg-green-500 !text-white"})
      }
    } catch (error) {
      console.log("Error Deleting Resume",error);
      toast.error(" Unable to Delete Resume",{className:"!bg-red-500 !text-white"})
      
    }
    

  }


  return (
    
      <div className='relative'>
      <div className='px-14 py-30  flex items-center justify-center bg-secondary border-red-500 border-2 
                  rounded-lg h-[282px] cursor-pointer hover:scale-105 hover:shadow-lg transition-all'>
        
        <h3 className='text-sm'>Resume {resumedetail.title} </h3>

    <div className='flex right-0 bottom-0 absolute m-4'>

    <DropdownMenu>
    <DropdownMenuTrigger>
      <MoreVertical className='h-7 w-5'/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>{resumedetail.title}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={()=>navigate(`/dashboard/resume/${resumedetail.documentId}/edit`)}>Edit</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>navigate(`/myresume/${resumedetail.documentId}/view`)}>View</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>navigate(`/myresume/${resumedetail.documentId}/view`)}>Download</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>{
        setopendeleteDialog(true)
      }}>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
    </div>

  <AlertDialog open={opendeleteDialog}>
  
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your Resume
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={()=>setopendeleteDialog(false)}>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>{deleteResume()
        setloadingResumes(true)
        setopendeleteDialog(false)
      }}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

      </div>
                  
    </div>
   
    
  )
}

export default ExistingResumes