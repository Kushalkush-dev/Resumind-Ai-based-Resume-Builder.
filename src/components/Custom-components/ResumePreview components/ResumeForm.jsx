import React, { act, useState } from 'react'
import Personaldetails from './Resumeinputcomponents/Personaldetails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, ArrowRightCircle, Home, LayoutGrid } from 'lucide-react'
import Summary from './Resumeinputcomponents/Summary'
import AddExperience from './Resumeinputcomponents/AddExperience'
import EducationDetails from './Resumeinputcomponents/EducationDetails'
import Skills from './Resumeinputcomponents/Skills'
import { Link, Links, Navigate, useParams } from 'react-router-dom'

const ResumeForm = () => {

  const [activeformsection, setactiveformsection] = useState(1)

  const [nextButton, setnextButton] = useState(true)

  const param=useParams()
  
  return (
    <>
    <div>

      <div className='flex justify-between'>
        <div className='flex gap-5'>
        <Link to="/dashboard">
          <Button><Home/>Home</Button>
        </Link>
      <Button variant={"outline"}><LayoutGrid/>Theme</Button>

        </div>

      <div className='flex gap-5 '>
        {activeformsection>1 && (  <Button onClick={()=>setactiveformsection(activeformsection-1)}><ArrowLeft/></Button>) }
    
      {activeformsection==5 ?(
        <Link to={`/myresume/${param.resumeId}/view`}>
          <Button >Download & Share<ArrowRight/></Button>
        </Link>):

        ( <Button disabled={nextButton}  onClick={()=>setactiveformsection(activeformsection+1)} >Next<ArrowRight/></Button>) }
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
        {activeformsection==5 && <Skills nextBtnState={setnextButton}/>}
    </div>

    </>
  )
}

export default ResumeForm