import React from 'react'
import {useState,useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
// import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { FaUser } from 'react-icons/fa'
import { login, reset } from '../features/auth/authSlice'
// import Spinner from '../components/Spinner'

function Login() {

    const [formData,setFormData]=useState({
        
        email:'',
        password:'',
       
    })

    const {email,password}=formData

    const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      // navigate('/')
      console.log('checking user role');
                console.log(user);
               if(user.role==='admin'){
                   console.log(user.role+'--------');
                   navigate('/admin')
               }else{

                navigate('/')
               }
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])



    const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))

    }

    const onSubmit=(e)=>{
     e.preventDefault()
     const userData={
        email,password
     }
     dispatch(login(userData))
    }

//     if(isLoading){
//    return <Spinner/>
//     }

  return (
    <>
    <section className="heading">
    <h1><FaSignInAlt/>Login</h1>
    <p>Please login</p>
    </section>

    <section className="form">
        <form onSubmit={onSubmit}>
            

            <div className="form-group">
            <input type="email" className="form-control"
             id="email" value={email} name="email" placeholder="Enter your email"
             onChange={onChange} />
            </div>

            <div className="form-group">
            <input type="password" className="form-control"
             id="password" value={password} name="password" placeholder="Enter password"
             onChange={onChange} />
            </div>

            

            <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
            </div>
            
        </form>
    </section>
    </>
  )
}

export default Login