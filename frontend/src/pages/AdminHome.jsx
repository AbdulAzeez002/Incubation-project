
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminFeed from '../components/AdminFeed'

function AdminHome() {

  const navigate=useNavigate()
  const {user}=useSelector((state)=>state.auth)

  useEffect(()=>{
    
    if(!user){
      navigate('/login')
    }
    if(user && user.role==='user'){
      navigate('/login')
    }
    

  },[user,navigate])
  return (
    <div>
      
     <AdminFeed/>
    </div>
  )
}

export default AdminHome