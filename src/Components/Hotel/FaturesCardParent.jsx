import React from 'react'
import FeaturesCard from './FeaturesCard'
import img1 from './../../Images/hotel2.jpg'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
const FaturesCardParent = () => {
  return (
    <Box sx={{display:'flex', flexFlow: 'column', alignItems:'center', paddingTop:'40px'}}>
        <Box >
            <Typography variant='h4' sx={{
                textAlign:"center"
            }}>Stay Your Way at Hyatt</Typography>
        </Box>
        <Box sx={
            {
                display: "flex",
                flexFlow: "wrap",
                justifyContent: "space-around",
                alignItems: "center",
                width: '100%',
                padding: "30px 5%",
            }
        }>
        <FeaturesCard img={img1} text={"Feel at home at Hyatt House"} para={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}/>
        <FeaturesCard img={img1} text={"Feel at home at Hyatt House"} para={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}/>
        <FeaturesCard img={img1} text={"Feel at home at Hyatt House"} para={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}/>
        </Box>
    </Box>
      )
}

export default FaturesCardParent