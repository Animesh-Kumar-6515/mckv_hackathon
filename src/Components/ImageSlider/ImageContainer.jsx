import React from 'react'
import { Button, Typography,Box , CardMedia } from '@mui/material'
import img from './../../Images/hotel1.jpg'
const ImageContainer = ({Text}) => {
  return (
   <>
         <CardMedia
        sx={{ height: "450px",
        position:"relative",

    }}
        image={img}
        title="green iguana"
      >

    <Box sx={{
        background:"rgba(0,0,0,0.54)",
        color:"white",
        position:"absolute",
        top:"50%",
        textAlign:"center",
    left:"50%",
    transform:"translate(-50%,-50%)",
        width:"50%",
        padding:"15px"
    }
    }>
        <Typography variant='h3'>{Text}</Typography>
        <Typography variant="body1" sx={{
            padding:"15px 0"
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus voluptatibus, aliquam quasi necessitatibus totam, ullam vel qui a quos eveniet fugiat eius nisi rerum excepturi harum sint expedita quibusdam.</Typography>
        <Button variant='contained'>VIEW OFFERS</Button>
    </Box>
   </CardMedia>
   </>
  )
}

export default ImageContainer