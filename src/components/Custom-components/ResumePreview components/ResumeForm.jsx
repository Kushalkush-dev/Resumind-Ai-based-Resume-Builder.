import React, { act, useState } from 'react'
import Personaldetails from './Resumeinputcomponents/Personaldetails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ArrowRightCircle, LayoutGrid } from 'lucide-react'

const ResumeForm = () => {

  const [activeformsection, setactiveformsection] = useState(1)

  return (
    <>
    <div>

      <div className='flex justify-between '>

      <Button variant={"outline"}><LayoutGrid/>Theme</Button>

      <div className='flex gap-5 '>
        {activeformsection>1 && (  <Button onClick={()=>setactiveformsection(activeformsection-1)}><ArrowLeft/></Button>) }
    
      <Button onClick={()=>setactiveformsection(activeformsection+1)}>Next<ArrowRight/></Button>
      </div>

      </div>

          {/* personal details */}
          <Personaldetails/>

          {/* summary details */}



        {/* experience details */}

        {/* education details */}

        {/* skills details */}
    </div>

    </>
  )
}

export default ResumeForm