import { Box, Button, Grid, styled, Typography } from "@mui/material";
import React from "react";
import img from "../../Images/paperImg1.jpg";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import JoinItem from "./JoinItem";

const Join = () => {
  const joinData = [
    [
      <BusinessCenterOutlinedIcon />,
      "Membership Is Free",
      "Access exclusive offers and meaningful benefits.",
    ],
    [
      <LoyaltyOutlinedIcon />,
      "Enjoy Member Rates",
      "Save up to 10% with your Member Rate at participating Hyatt hotels.",
    ],
    [
      <NightlightOutlinedIcon />,
      "Earn Free Nights",
      "Enjoy a Brand Explorer Award after you stay at five unique brands.",
    ],
    [
      <StarBorderOutlinedIcon />,
      "Feel Rewarded",
      "Earn points to use toward free nights, dining, spa experiences and more.",
    ],
  ];

  const titleStyle = {
    fontFamily: "Oswald, sans-serif",
    textAlign: "center",
  };

  const Container = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    background: `linear-gradient(0deg, rgba(10,54,102,0.9196720924698004) 100%, rgba(7,45,108,1) 100%),
                 url(${img})`,
    color: "white",
    margin: "40px 5%",
    padding: "40px",
  });

  return (
    <Container>
      <Box>
        <Typography gutterBottom variant="h5" sx={titleStyle}>
          Join
        </Typography>
        <Typography variant="h5" sx={titleStyle}>
          World Of Hyatt
        </Typography>
      </Box>
      <Grid container spacing={2} margin="30px 0">
        {joinData.map((data) => (
          <JoinItem logo={data[0]} title={data[1]} text={data[2]}></JoinItem>
        ))}
      </Grid>
      <Box>
        <Button
          sx={{
            color: "white",
            border: "1px solid white",
            padding: "10px 20vw",
            borderRadius: "0",
          }}
        >
          JOIN NOW
        </Button>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid white",
          borderRadius: 0,
          marginTop: "30px",
          paddingBottom: "5px",
          fontFamily: "sans-serif",
        }}
      >
        Terms Apply
      </Box>
    </Container>
  );
};

export default Join;
