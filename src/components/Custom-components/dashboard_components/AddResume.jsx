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
import { Button } from '@/components/ui/button'

const AddResume = () => {
  const [openDialog, setopenDialog] = useState(false)

  return (
    <div >
    <div onClick={()=>setopenDialog(true)} className='px-14 py-30  flex items-center justify-center bg-secondary border-dashed border-2 
                  rounded-lg h-[282px] cursor-pointer hover:scale-105 hover:shadow-lg transition-all'>

    <PlusCircle/>

  </div>

    <Dialog open={openDialog}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>

        <div className='flex items-center justify-end gap-2'>
          <Button onClick={()=>setopenDialog(false)} variant="ghost">Cancel</Button>
          <Button>Create</Button>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>

    </div>
  )
}

export default AddResume