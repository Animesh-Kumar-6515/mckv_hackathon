import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';


const Buttoncss = styled(Button)`
color: white;
font-size: 10px;
`
const Xyz = styled(Button)`
color:red;
`
const Footer = () => {

  return (
    <Box sx={{
        display:"flex",
        paddingLeft:"150px",
        background:"black",
        height:"60px"
    }}>
        
        <Buttoncss >Privacy Policy</Buttoncss>
        <Buttoncss >Terms & Conditions</Buttoncss>
        <Buttoncss >Cookies Center</Buttoncss>
        <Buttoncss >Security & Safety</Buttoncss>
        <Buttoncss >Modern Slavery and Human Trafficking</Buttoncss>
        <Buttoncss >Do Not Sell or Share My Personal Information</Buttoncss>
        <Xyz >© 2022 Hyatt Corporation</Xyz>
    </Box>
  )
}

export default Footer