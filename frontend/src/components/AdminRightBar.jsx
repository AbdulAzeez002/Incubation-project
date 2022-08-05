import { Badge, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function AdminRightBar() {

  const [state,setState] = useState([])
  const [count,setCount] = useState()
  const [status,setStatus] = useState(false)
 
  useEffect(()=>{
    axios({
      method:'get',
      url:'api/incubation/notOpenedApps'
    })
    .then((res)=>{
     setCount(res.data.count);
     setState(res.data.companies)
    })
  },[])

  const statusHandler = ()=>{
    setStatus(true)
    axios({
      method:'get',
      url:'api/incubation/openedToclose'
    }).then((res)=>{setCount(res.data.count)})
  }
  
  return (
    <div>
        <Box flex={2} p={1} sx={{display:{xs:'none',lg:'block'}}}>
          <Stack  direction='row' >
            <List>
              <ListItemButton onClick={()=>setStatus(false)}>
                <ListItemIcon>
               <Tooltip title='Email'>
               <Badge color="primary"  max={99}>
                   <MailIcon />
                </Badge>
               </Tooltip>
                </ListItemIcon>
              </ListItemButton>
            </List>
            <List>
              <ListItemButton onClick={()=>statusHandler()}>
                <ListItemIcon>
                <Tooltip title='Notification'>
               <Badge color="primary" badgeContent={count} max={9}>
                   <NotificationsIcon />
                </Badge>
               </Tooltip>
                </ListItemIcon>
              </ListItemButton>
            </List>
           
          </Stack>
          <Box mt={2} bgcolor='lightgray'>
            
   </Box>
   {status && state.length>0 ?<Box>
    <Typography variant='body1'> New</Typography>
    {
      state.map((val)=> {
        return(
          <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          aria-label="contacts"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={val.email} />
            </ListItemButton>
          </ListItem>
        </List>
        
        )
       } )
    }
   </Box>  :
   <Box >
   <MailIcon fontSize='large' sx={{marginLeft:'40%'}}/>
   <Typography sx={{marginLeft:'30%'}} variant='body1'>No Emails</Typography>
   </Box>}
        </Box>
    </div>
  )
}

export default AdminRightBar