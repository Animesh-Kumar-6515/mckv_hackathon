import { Box, Typography } from '@mui/material'
import React from 'react'
import NavTitles from './NavTitles'
import SignIn from './SignIn'


const NavBar = () => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid black'
    }}>
        <Box sx ={{color: '#0504aa'}} className="logo">
            <Typography variant='h4'>World Of Hyatt</Typography>
        </Box>
        <NavTitles />
        <SignIn />
    </Box>
  )
}

export default NavBar