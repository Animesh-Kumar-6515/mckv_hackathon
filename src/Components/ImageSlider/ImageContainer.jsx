import React from "react";
import { Button, Typography, Box, CardMedia, CardContent } from "@mui/material";
const ImageContainer = ({ image, title, content, button, left }) => {
  return (
    <>
      <CardMedia
        sx={{
          height: "420px",
          position: "relative",
        }}
        image={image}
        title="hotel image"
      >
        <Box
          sx={{
            background: "rgba(0,0,0,0.54)",
            color: "white",
            position: "absolute",
            top: 0,
            left: left ? "0" : "none",
            right: left ? "none" : "0",

            display: { xs: "none", sm: "flex" },
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
            width: "40%",
            padding: "40px",
          }}
        >
          <Typography variant="h4" sx={{ fontFamily: "Oswald, sans-serif" }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ padding: "25px 0" }}>
            {content}
          </Typography>
          <Button variant="outline" sx={{ border: "1px solid white" }}>
            {button}
          </Button>
        </Box>
      </CardMedia>
      <CardContent
        sx={{
          background: "rgba(0,0,0,0.54)",
          color: "white",
          display: { xs: "flex", sm: "none" },
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "300px",
          width: "100%",
          padding: "40px",
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1" sx={{ padding: "25px 0" }}>
          {content}
        </Typography>
        <Button variant="outline" sx={{ border: "1px solid white" }}>
          {button}
        </Button>
      </CardContent>
    </>
  );
};

export default ImageContainer;
