import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import hotel1 from "../../Images/hotel1.jpg";

const Hotel = () => {
  const StyledButton = styled(motion.button)({
    backgroundColor: "transparent",
    border: "1px solid white",
    color: "white",
    fontWeight: "bolder",
    padding:'8px 16px',
    marginBottom: "30px",
  });
  const StyledBox = styled(motion.div)(({ theme }) => ({
    backgroundImage: `url(${hotel1})`,
    borderRadius: "8px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    margin: "20px 0",
    [theme.breakpoints.up("xs")]: {
      width: "98%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "48%",
    },
    [theme.breakpoints.up("md")]: {
      width: "24%",
    },
  }));

  const HotelName = styled(Typography)({
    fontWeight: "bold",
    fontSize: "20px",
    padding: "15px 10px",
  });

  return (
    <Box sx={{display:'flex', flexFlow: 'column', alignItems:'center', paddingTop:'40px'}}>
      <Box>
        <Typography variant='h4'>Discover Something New</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          width: '100%',
          padding: "30px 5%",
        }}
      >
        {[
          "Hyatt Centric Goa",
          "Grand Hyatt Goa",
          "Hyatt Regency Amritsar",
          "Hyatt Regency Chandigarh",
        ].map((hotel) => (
          <StyledBox whileHover={{ translateY: -15 }} transition={{duration: 0.4}}>
            <HotelName>{hotel}</HotelName>
            <StyledButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              View Hotel
            </StyledButton>
          </StyledBox>
        ))}
      </Box>
    </Box>
  );
};

export default Hotel;
