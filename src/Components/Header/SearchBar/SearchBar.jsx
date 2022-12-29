import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Box,Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import SearchbarMiddle from "./SearchbarMiddle";
import SearchbarTop from "./SearchbarTop";
import SearchbarBottom from "./SearchbarBottom";
import { Grid } from "@mui/material";
const SearchBar = () => {
  const [dropdown, setdropdown] = useState(false);
  const theme = useTheme();
  const handleClick = () => {
    setdropdown(!dropdown);
  };
  const isBig = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{position: "-webkit-sticky",
      position: "sticky",
      top: 0,
      backgroundColor:"white",
      zIndex:5}}>
      <Button
        sx={{
          backgroundColor: "#ccc",
          width: "100%",
          height: "40px",
          padding: "0 5%",
          borderRadius: "0px",
          justifyContent: "flex-start",
          display: { xs: "sticky", md: "none" },
          "&:hover": {
            backgroundColor: "#ccc",
          },
        }}
        onClick={handleClick}
        startIcon={!dropdown ? <SearchIcon /> : <CloseIcon />}
        disableRipple
      ></Button>
      {(dropdown || isBig) && (
        <Grid container spacing={2} padding="20px 5%">
          <Grid item md={5} xs={12} sx={{}}>
            <SearchbarTop />
          </Grid>
          <Grid item md={4} xs={12}>
            <SearchbarMiddle />
          </Grid>
          <Grid item md={3} xs={12}>
            <SearchbarBottom />
          </Grid>
        </Grid>
      )}

    </Box>
  );
};

export default SearchBar;
