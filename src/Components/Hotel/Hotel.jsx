import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import hotel1 from "../../Images/paperImg2resized.jpg";
import hotel2 from "../../Images/paperim1.jpg";
import hotel3 from "../../Images/paperImg3resized.jpg";
import hotel4 from "../../Images/paperImg33.jpg";

const Hotel = () => {
  const StyledButton = styled(motion.button)({
    backgroundColor: "transparent",
    border: "1px solid white",
    color: "white",
    fontWeight: "bolder",
    padding: "8px 16px",
    marginBottom: "30px",
  });
  const StyledBox = styled(motion.div)(({ theme,img }) => ({
    // background: "rgb(0,0,0)",
    background: `linear-gradient(0deg, rgba(0,0,0,0.7516048655790442) 0%,
                 rgba(255,255,255,0) 100%, rgba(255,255,255,0.9112687311252626) 100%),
                 url(${img})`,
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
    // fontFamily: "'Merienda', 'cursive'",
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        paddingTop: "70px",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontFamily: "'Merienda', 'cursive'" }}
        >
          Discover Something New
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          padding: "30px 5%",
        }}
      >
        {[
          ["Hyatt Centric Goa",hotel1],
          ["Grand Hyatt Goa",hotel2],
          ["Hyatt Regency Amritsar",hotel3],
          ["Hyatt Regency Chandigarh",hotel4]
        ].map((hotel) => (
          <StyledBox
            whileHover={{ translateY: -15 }}
            transition={{ duration: 0.4 }}
            img={hotel[1]}
          >
            <HotelName>{hotel[0]}</HotelName>
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
