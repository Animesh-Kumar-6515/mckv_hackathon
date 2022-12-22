import React from 'react'
import InputBase from '@mui/material/InputBase';
import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box sx={
      {
        display:"flex",
        justifyContent:"space-between",
        padding:"10px 6rem"
      }
    }>
 <Box sx={{
      // border:"1px solid black",
      display:"flex"
    }
    }
    >
      <Box sx={{
        paddingTop:"12px",
        paddingRight:"3px",
        paddingLeft:"3px",
        borderBottom:"1px solid #ccc",
          borderTop:"1px solid #ccc",
          borderLeft:"1px solid #ccc"
      }}>
  <SearchIcon />
</Box>
      <InputBase
        sx={{ 
          padding:"3px",
          width:"30vw",
          height:"49px",
          borderBottom:"1px solid #ccc",
          borderTop:"1px solid #ccc",
          borderRight:"1px solid #ccc"
         }}
        placeholder="City Address, Landmark, Airport, Hotel "
        inputProps={{ 'aria-label': 'search google maps' }}
        
    />
    <Box sx={{
      display:"flex",
      marginLeft:"5px"
    }}>
    <Button variant="contained" sx={{
      width:"16vw",
      height:"49px",
      fontSize:"18px",
      backgroundColor:"#ffb612",
      color:"#000",
      border:"0px",
      marginRight:"5px"
    }}>FIND HOTELS</Button>
    <Button variant="contained" sx={{
      width:"16vw",
      height:"49px",
      fontSize:"18px",
      backgroundColor:"#ffb612",
      color:"#000",
      border:"0px"
    }}>FIND HOTELS</Button>
    </Box>
    </Box>
    <Button variant="contained" sx={{
      width:"20%",
      height:"49px",
      fontSize:"18px",
      backgroundColor:"#ffb612",
      color:"#000",
      border:"0px"
    }}>FIND HOTELS</Button>

    </Box>
   
  )
}

export default SearchBar