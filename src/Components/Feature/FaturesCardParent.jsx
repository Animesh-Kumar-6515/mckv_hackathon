import React from "react";
import FeaturesCard from "./FeaturesCard";
import img1 from "./../../Images/hotel2.jpg";
import img2 from "./../../Images/cardImg1.jpg";
import img3 from "./../../Images/cardImg2.jpg";
import img4 from "./../../Images/cardImg3.jpg";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
const FaturesCardParent = () => {
  const FeatureData = [
    [
      img1,
      "Feel at home at Hyatt House",
      "Hyatt House hotels offer apartment-style suites with full kitchens, living areas, and more, including a 24-hour gym, and in-house laundry.",
      "LEARN MORE >",
      "row",
      4,
    ],
    [
      img2,
      "Explore flavorful horizons",
      "Culinary Stories are a curated collection of hotels and restaurants that enable you to truly savor the flavors of a place and a people, distilled, perfected, and presented upon your plate.",
      "SEE CULINARY STORIES >",
      "row",
      4,
    ],
    [
      img3,
      "Experience the wonders of winter",
      "Snow Days Stories are a curated collection of hotels and resorts where you're free to zoom or cruise at whatever speed suits you, then seek food, drink and perhaps a roaring fire at the mountain base.",
      "SEE SNOW DAYS STORIES >",
      "row",
      4,
    ],
    [
      img4,
      "The perfect pace: Hyatt resorts",
      "Get away without ever having to leave when you stay at a Hyatt resort and enjoy an idyllic escape your way.",
      "LEARN MORE >",
      "column",
      12,
    ],
  ];

  return (
    <Box
      sx={{
        padding: "0 5%",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontFamily: "Oswald, sans-serif" }}
        >
          Stay Your Way at Hyatt
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, margin: "40px 0" }}>
        <Grid container spacing={2} justifyItems="center">
          {FeatureData.map((data) => (
            <Grid item xs={12} sm={6} md={data[5]}>
              <FeaturesCard
                img={data[0]}
                text={data[1]}
                para={data[2]}
                btn={data[3]}
                dir={data[4]}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FaturesCardParent;
