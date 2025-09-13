import React from 'react'
import { Link, Links, useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical } from 'lucide-react'

const navigate=useNavigate()



const ExistingResumes = ({resumedetail,ResumeNum}) => {
  return (
    <Link to={`/dashboard/resume/${resumeinfo.documentId}/edit`}>
      <div className='relative'>
      <div className='px-14 py-30  flex items-center justify-center bg-secondary border-red-500 border-2 
                  rounded-lg h-[282px] cursor-pointer hover:scale-105 hover:shadow-lg transition-all'>
        
        <h3 className='text-sm'>Resume {resumeinfo.title} </h3>

    <div className='flex right-0 bottom-0 absolute m-4'>

    <DropdownMenu>
    <DropdownMenuTrigger>
      <MoreVertical className='h-7 w-5'/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>{resumeinfo.title}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={()=>navigate(`/dashboard/resume/${resumedetail.documentId}/edit`)}>Edit</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>navigate(`/myresume/${resumedetail.documentId}/view`)}>View</DropdownMenuItem>
      <DropdownMenuItem onClick={()=>navigate(`/myresume/${resumedetail.documentId}/view`)}>Download</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
    </div>



      </div>
                  
    </div>
    </Link>
    
  )
}

export default ExistingResumes