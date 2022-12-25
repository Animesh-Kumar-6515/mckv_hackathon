import React from 'react'
import { Box, Button, Paper } from '@mui/material';


const SearchbarMiddle = ({widthcss}) => {
  return (
        <>
        <Button variant="contained" sx={{
      width:widthcss,
      height:"49px",
      fontSize:"18px",
      backgroundColor:"#ffb612",
      color:"#000",
      border:"0px"
    }}>FIND HOTELS</Button>
    <Button variant="contained" sx={{
      width:widthcss,
      height:"49px",
      fontSize:"18px",
      backgroundColor:"#ffb612",
      color:"#000",
      border:"0px"
    }}>FIND HOTELS</Button>
        
        </>    
  )
}

export default SearchbarMiddle