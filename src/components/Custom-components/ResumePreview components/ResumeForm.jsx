import React, { act, useState } from 'react'
import Personaldetails from './Resumeinputcomponents/Personaldetails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ArrowRightCircle, LayoutGrid } from 'lucide-react'
import Summary from './Resumeinputcomponents/Summary'
import AddExperience from './Resumeinputcomponents/AddExperience'
import EducationDetails from './Resumeinputcomponents/EducationDetails'

const ResumeForm = () => {

  const [activeformsection, setactiveformsection] = useState(1)

  const [nextButton, setnextButton] = useState(true)
  
  return (
    <>
    <div>

      <div className='flex justify-between'>

      <Button variant={"outline"}><LayoutGrid/>Theme</Button>

      <div className='flex gap-5 '>
        {activeformsection>1 && (  <Button onClick={()=>setactiveformsection(activeformsection-1)}><ArrowLeft/></Button>) }
    
      <Button disabled={nextButton} onClick={()=>setactiveformsection(activeformsection+1)} >Next<ArrowRight/></Button>
      </div>

      </div>

          {/* personal details */}
         {activeformsection==1 && <Personaldetails nextBtnState={setnextButton}/>}

          {/* summary details */}
         
        {activeformsection==2 && <Summary nextBtnState={setnextButton}/>}

        {/* experience details */}
       {activeformsection==3 && <AddExperience nextBtnState={setnextButton}/>}
        {/* education details */}
       {activeformsection==4 && <EducationDetails nextBtnState={setnextButton}/>}
        {/* skills details */}
    </div>

    </>
  )
}

export default ResumeForm