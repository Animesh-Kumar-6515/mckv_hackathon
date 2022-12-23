import CloseIcon from '@mui/icons-material/Close';
import React,{useState} from 'react'
import { Box, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchbarMiddle from './SearchbarMiddle';
import SearchbarTop from './SearchbarTop';
import "./Searchbar.css"
import SearchbarBottom from './SearchbarBottom';
const SearchBar = () => {
  const [dropdown,setdropdown]=useState(false)
  const handleClick =()=>{
    setdropdown(!dropdown)
  }

  return (
    <>
    <Box sx={
      {
        display:{
          lg:"flex",
          md:"none",
          xs:"none",
          sm:"none"
        },
        justifyContent:"space-between",
        padding:"10px 6rem",
        width:"100%"
      }
    }>
    <SearchbarTop widthcss={"30vw"}/>
    <SearchbarMiddle widthcss={"60%"}/>
    <SearchbarBottom widthcss={"25%"}/>
   </Box>
<Box sx={{
          display:{
            lg:"none",
            md:"block",
            xs:"block",
            sm:"block"
          }
}}>
<Paper sx={{
  backgroundColor:"#ccc"
}} onClick={handleClick}>

<Box sx={{
        paddingTop:"12px",
        paddingRight:"3px",
        paddingLeft:"3px",
        borderBottom:"1px solid #ccc",
        borderTop:"1px solid #ccc",
        borderLeft:"1px solid #ccc"
      }}>
  {!(dropdown)?<CloseIcon/>:<SearchIcon />} 
</Box >
</Paper>
<Box sx={{
  padding:"15px",
  display:(dropdown) ? "none" : "block" ,
  height:"auto",
  width:"100%"
}}
>

<Paper sx={{
  margin:"10px"
}
}>
  <SearchbarTop widthcss={"100%"}/>
</Paper>
<Paper sx={{
  margin:"10px"
}
}>
  <SearchbarMiddle displaycss={"block"} widthcss={"50%"}/>
</Paper>
<Paper sx={{
  margin:"10px"
}
}>
  <SearchbarBottom widthcss={"100%"}/>
</Paper>

</Box>
</Box>
</>
  )
}

export default SearchBar