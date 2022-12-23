import React from 'react'
import { Box, Button, Paper } from '@mui/material';
const SearchbarMiddle = ({widthcss}) => {
  return (
    <Box sx={
        {
            display:"flex"
        }
    }>
 
    <Button variant="contained" sx={{
          width:widthcss,
          height:"49px",
          fontSize:"18px",
          backgroundColor:"#ffb612",
          color:"#000",
          border:"0px",
          marginRight:"5px"
        }}>FIND HOTELS</Button>
           <Button variant="contained" sx={{
          width:widthcss,
          height:"49px",
          fontSize:"18px",
          backgroundColor:"#ffb612",
          color:"#000",
          border:"0px",
          marginLeft:"5px"
        }}>FIND HOTELS</Button>
       </Box>
  )
}

export default SearchbarMiddle