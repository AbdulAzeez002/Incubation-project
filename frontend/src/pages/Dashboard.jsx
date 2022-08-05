import React from 'react'
import {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// import GoalForm from '../components/GoalForm'
// import Spinner from '../components/Spinner'
import { getIncubation,reset } from '../features/incubatiton/incubationSlice'
// import GoalItem from '../components/GoalItem'

function Dashboard() {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user}=useSelector((state)=>state.auth)
  const {forms,isLoading,isError,message}=useSelector((state)=>state.incub)
  console.log(forms);
  console.log('adhil');
  let form=forms[0]
  console.log('abc');
//   const {goals,isLoading,isError,message}=useSelector((state)=>state.goals)
  
  useEffect(()=>{
    // if(isError){
    //   console.log('error ')
    // }
    if(!user){
      navigate('/login')
    }
    if(user && user.role==='admin'){
      navigate('/login')
    }

    dispatch(getIncubation())

    // return ()=>{
    //   dispatch(reset())
    // }
  },[user,navigate,dispatch])

//   if(isLoading){
//     return <Spinner/>
//   }

  return (
    <>
    <section className="heading">
      <h1>welcome {user && user.name}</h1>
      {/* <p>User Dashboard</p> */}
      </section>
      {/* <GoalForm/> */}

      <section className="content">

        {forms.length>0 ? (<p>Here is your Booking details</p>):(<p>user home</p>)}
         <br />
        
        <div className='text-center'>
            {forms.length>0 ?(<TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 }} aria-label="simple table">
        <TableHead>  
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Icubation Type</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >Date</TableCell>
            <TableCell >DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forms.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                {row.companyName}
              </TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.typeOfIncubation}</TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell >{row.createdAt}</TableCell>
              <TableCell ><button className='btn' >Delete</button></TableCell>
              
              
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>):( <Link to={'/bookSlot'}><div className="text-center"><button className='btn ms-5' >Book a Slot</button></div></Link>)}
       
    </div>
        
      </section>
      </>
  )
}

export default Dashboard