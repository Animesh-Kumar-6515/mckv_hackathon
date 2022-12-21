import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';
const FooterTop = () => {
  const Boxcss =styled(Box)`
  padding-left: 100px;
  `
  const Boxcss1=styled(h3)`
  padding-bottom: 20px;
  `
  return (
    <Boxcss >
        <Boxcss1 className='FooterReservation'>RESERVATIONS</Boxcss1>
        <ul className='NoBullet'>
            <li><Button className='ReservationButtonOne'>Modify/Cancel</Button></li>
        </ul>
        

    </Boxcss>
  )
}

export default FooterTop