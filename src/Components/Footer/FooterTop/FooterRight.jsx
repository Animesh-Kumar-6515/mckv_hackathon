import styled from "@emotion/styled";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import img1 from '../../../Images/downloadapp1.png'
import img2 from '../../../Images/downloadapp2.webp'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterRight = () => {
  const Container = styled("Box")(() => ({
    width:'80%',
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    margin: "30px",
  }));
  const Heading = styled("Typography")(() => ({
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "20px",
    fontWeight: '400'
  }));
  const StyledButton = styled(Button)(() => ({
    backgroundColor:'#282828',
    color: 'white',
    border: '1px solid white',
    padding: '10px 100px',
    margin: '20px 0px',
    borderRadius:0,
    
  }))
  const Image = styled('img')(() => ({
    width: '100px',
    height: '33px',
    margin:'10px 10px 10px 0'
  }))


  return (
    <Box
      sx={{
        width: {xs:'100%', sm:'50%'},
        backgroundColor: "#282828",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Container>
        <Heading>THE HYATT.COM</Heading>
        <Heading>BEST RATE GUARANTEE</Heading>
        <StyledButton>LEARN MORE</StyledButton>
      </Container>
      <Container>
        <Heading>GET THE MOBILE APP</Heading>
        <Box>
          <Image src={img1}></Image>
          <Image src={img2}></Image>
        </Box>
      </Container>
      <Container>
        <Heading>CONNECT WITH HYATT</Heading>
        <Box>
          <IconButton sx={{color: '#0A66C2', margin:'10px'}}><FacebookIcon/></IconButton>
          <IconButton sx={{color: '#ff006e', margin:'10px'}}><InstagramIcon/></IconButton>
          <IconButton sx={{color: '#0A66C2', margin:'10px'}}><TwitterIcon/></IconButton>
          <IconButton sx={{color: '#0A66C2', margin:'10px'}}><LinkedInIcon/></IconButton>
          <IconButton sx={{color: 'red', margin:'10px'}}><YouTubeIcon/></IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterRight;