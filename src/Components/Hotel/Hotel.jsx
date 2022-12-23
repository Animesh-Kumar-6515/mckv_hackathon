import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import hotelImage1 from "../../Images/hotelimg1.jpg";

const Hotel = () => {
  const StyledButton = styled(motion.button)({
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontWeight: "bolder",
    paddingBottom: "10px",
  });
  const StyledPaper = styled(Box)({
    // backgroundImage: `url(${hotelImage1})`,
    backgroundColor:"black",
    borderRadius: "8px",
    height: "400px",
    maxWidth: {xs:"98%",sm:"48%",md:"24%"},
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
    margin:"20px 0"
  });

  const HotelName = styled(Typography)({
    fontWeight: "bold",
    fontSize: "20px",
    paddingBottom: "5px",
  });
  return (
    <Box sx={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"space-around",
      alignItems:"center",
      padding:"5%"
      
    }}>
      <StyledPaper>
        <HotelName>Hyatt Centric Candolim Goa</HotelName>
        <StyledButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          View Hotel →
        </StyledButton>
      </StyledPaper>
      <StyledPaper>
        <HotelName>Hyatt Centric Candolim Goa</HotelName>
        <StyledButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          View Hotel →
        </StyledButton>
      </StyledPaper>
      <StyledPaper>
        <HotelName>Hyatt Centric Candolim Goa</HotelName>
        <StyledButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          View Hotel →
        </StyledButton>
      </StyledPaper>
      <StyledPaper>
        <HotelName>Hyatt Centric Candolim Goa</HotelName>
        <StyledButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          View Hotel →
        </StyledButton>
      </StyledPaper>
    </Box>
  );
};

export default Hotel;
