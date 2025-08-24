import axios from 'axios';


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY
const axiosClient=axios.create({
  baseURL:"http://localhost:1337/api/",
  headers:{
   'Content-Type':"application/json",
   'Authorization':`Bearer ${API_KEY}`
  }

})

const createNewResume= async (data)=>{
  try {
    const response=await axiosClient.post("/user-resumes",{data})
    return response.data
  } catch (error) {
    console.error("Error creating resume:");
    throw error; 
  }
  
}


const getResumes=async (email)=>{
  try {
    const response=await axiosClient.get(`/user-resumes?filters[email][$eq]=${email}`)
    const data=response.data
    return data
  } catch (error) {
    console.log("Error fetching resumes");
    throw error;
    
  }

}


export default {
  createNewResume,
  getResumes
}