import axios from 'axios'

const API_URL='/api/incubation/'

//create new goal

const createIncubation=async(Data,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response=await axios.post(API_URL,Data,config)

    return response.data
    
    
}

const getIncubation = async (token) => {
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }

const incubationService={
    createIncubation,getIncubation
    
}

export default incubationService