import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const JoinItem = ({ logo, title, text }) => {
  const titleStyle = {
    fontFamily: "'Merienda', 'cursive'",
    textAlign: "center",
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" , flexDirection:'column'}}
    >
      <Box
        sx={{
          border: "1px solid white",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {logo}
      </Box>
      <Box>
        <Typography gutterBottom variant="h6" sx={titleStyle}>
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography gutterBottom textAlign='center'>{text}</Typography>
      </Box>
    </Grid>
  );
};

export default JoinItem;
