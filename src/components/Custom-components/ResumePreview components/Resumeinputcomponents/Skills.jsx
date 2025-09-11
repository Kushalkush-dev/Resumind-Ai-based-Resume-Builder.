import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ResumeInfoContext } from '@/Context/resumeInfo'
import { Loader2 } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'


const Skills = () => {
  
  const {resumeInfo,setresumeInfo}=useContext(ResumeInfoContext)
  
  const [loading, setloading] = useState(false)
  
  const skillsfield={
    name:'',
    rating:0
  }  
  
  const [skillList, setskillList] = useState(resumeInfo.skills.length>0?resumeInfo.skills:[skillsfield])
  
  useEffect(()=>{
    setresumeInfo((prev)=>({...prev,skills:skillList}))
  },[skillList])
  




  const handleChange=(value,name,index)=>{
  

    const updateList=[...skillList]
    updateList[index][name]=value

    setskillList(updateList)


  }  


 
  const removeExperience=(currindex)=>{
    if(skillList.length===1)return;
    let updateList= [...skillList]
    updateList=updateList.filter((exp,index)=>currindex!=index)
    setskillList(updateList)
    
  }

  const handleAddMore=()=>{
  
    setskillList([...skillList,skillsfield])
    


  }





  return (
     <div className='shadow-lg  border-t-5 border-t-primary mt-5 p-5'>
      <div className='flex justify-between items-center m-2.5'>
        <h2 className='text-xl font-bold'>Add Skills</h2>
      </div> 

        <div>
          {skillList.map((item,index)=>(
            <div key={index}>
              <div className='border p-5 my-5'>
                <div className='flex justify-between items-center '>
                
               <div>
                  <label className="font-medium ">Skill</label>
                  <Input value={skillList[index].name}  onChange={(value)=>handleChange(value,"name",index)}/>
                </div>

                <div  className='mt-5'>
                  <Rating style={{ maxWidth: 120 }} value={skillList[index].rating} onChange={(value)=>handleChange(value,"rating",index)}  />
                </div>

                
                
                
              </div>




              <div className='flex justify-between'>
                <div className='flex gap-5 justify-between items-center'>
              <Button type='button' onClick={handleAddMore}  variant="outline" className='mt-5 hover:text-primary border-1 border-green-400 hover:scale-105 active:scale-100' >Add more +</Button>
              <Button type='button' onClick={()=>removeExperience(index)} variant='outline' className='mt-5 hover:text-red-500 border-1 border-red-500 hover:scale-105 active:scale-100'>Remove</Button>
                </div>
            
              </div>


              </div>
              
            </div>
          ))}
        </div>



      <div className='flex justify-end'>

            <Button type='submit'  className='mt-5' >{loading?<Loader2 className='animate-spin'/>:"Save"}</Button>
      </div>





    

    </div>

  )
}

export default Skills