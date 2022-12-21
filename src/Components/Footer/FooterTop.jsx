import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./FooterTop.css"
const FooterTop = () => {
  return (
    <Box className='ReservationBox'>
        <h3 className='FooterReservation'>RESERVATIONS</h3>
        <ul className='NoBullet'>
            <li><Button className='ReservationButtonOne'>Modify/Cancel</Button></li>
        </ul>
        

    </Box>
  )
}

export default FooterTop