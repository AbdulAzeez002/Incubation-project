import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader,FormControl, FormControlLabel ,Switch, Divider, createTheme} from '@mui/material'
import React from 'react'

import FiberNewIcon from '@mui/icons-material/FiberNew';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PendingIcon from '@mui/icons-material/Pending';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import {useSelector,useDispatch} from 'react-redux' 
import {newApplication,blockedApplication,pendingApplication,registeredApplication,allApplication} from '../features/company/companySlice'
import WidgetsIcon from '@mui/icons-material/Widgets'
import TimelineIcon from '@mui/icons-material/Timeline';
import {useNavigate} from 'react-router-dom'

const active = createTheme({
  active:{
    background:' background.paper',
    
  }
})

function AdminSideBar() {
  const navigate  = useNavigate()
  const dispatch = useDispatch()
  return (
  <Box  flex={1} p={3} sx={{display:{xs:'none',lg:'block'}}}>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={()=>dispatch(allApplication())} >
        <ListItemIcon>
          <WidgetsIcon/>
        </ListItemIcon>
        <ListItemText primary="ALL" />
      </ListItemButton>

      <ListItemButton onClick={()=>dispatch(newApplication())} >
        <ListItemIcon>
          <FiberNewIcon/>
        </ListItemIcon>
        <ListItemText primary="NEW APPLICATION" />
      </ListItemButton>

      <Divider variant="middle"   />
      <ListItemButton onClick={()=>dispatch(pendingApplication())}>
        <ListItemIcon>
          <PendingIcon/>
        </ListItemIcon>
        <ListItemText primary="PENDING " />
      </ListItemButton>
      <Divider variant="middle"  />

      <ListItemButton onClick={()=>dispatch(registeredApplication())}>
        <ListItemIcon>
          <HowToRegIcon/>
        </ListItemIcon>
        <ListItemText primary="APPROVED " />
      </ListItemButton>

      <Divider variant="middle" />

      <ListItemButton onClick={()=>dispatch(blockedApplication())}>
        <ListItemIcon>
          <NewReleasesIcon/>
        </ListItemIcon>
        <ListItemText primary="DENEID " />
      </ListItemButton>

      <Divider variant="middle" />

      <ListItemButton onClick={()=>navigate('/admin/bookSlot')} >
        <ListItemIcon>
          <BeenhereIcon/>
        </ListItemIcon>
        <ListItemText primary="BOOKING SLOTS" />
      </ListItemButton>

      <Divider variant="middle" />

      <ListItemButton onClick={()=>navigate('/admin/track')}>
        <ListItemIcon>
          <TimelineIcon/>
        </ListItemIcon>
        <ListItemText primary="TRACK" />
      </ListItemButton>
     
    </List>
  </Box>
  )
}

export default AdminSideBar