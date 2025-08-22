import { PlusCircle } from 'lucide-react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { v4 as uuidv4 } from 'uuid';

const AddResume = () => {
  const [openDialog, setopenDialog] = useState(false)
  const [title, settitle] = useState()


  const onCreate=()=>{
   const id=uuidv4();
  console.log(id,title);
  

  }

  return (
    <div >
    <div onClick={()=>setopenDialog(true)} className='px-14 py-30  flex items-center justify-center bg-secondary border-dashed border-2 
                  rounded-lg h-[282px] cursor-pointer hover:scale-105 hover:shadow-lg transition-all'>

    <PlusCircle/>

  </div>

    <Dialog open={openDialog}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New Resume</DialogTitle>
        <DialogDescription>
          Add the title for your resume
          <Input onChange={(e)=>settitle(e.target.value)} type="text" placeholder="Ex:Product Manager" className="my-2"/>
        </DialogDescription>
        
        <div className='flex items-center justify-end gap-2'>
          <Button onClick={()=>setopenDialog(false)} variant="ghost">Cancel</Button>
          <Button disabled={!title} onClick={()=>{
            onCreate()
          }}>Create</Button>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>

    </div>
  )
}

export default AddResume