import React from "react";
import InputBase from "@mui/material/InputBase";
import { Box, Button, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchbarTop = ({ widthcss }) => {
  return (
    <>
      <Box
        sx={{
          // border:"1px solid black",
          display: "flex",
        }}
      >
        <Box
          sx={{
            paddingTop: "12px",
            paddingRight: "3px",
            paddingLeft: "3px",
            borderBottom: "1px solid #ccc",
            borderTop: "1px solid #ccc",
            borderLeft: "1px solid #ccc",
          }}
        >
          <SearchIcon />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <InputBase
            sx={{
              padding: "3px",
              width: widthcss,
              height: "49px",
              borderBottom: "1px solid #ccc",
              borderTop: "1px solid #ccc",
              borderRight: "1px solid #ccc",
            }}
            placeholder="City Address, Landmark, Airport, Hotel "
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default SearchbarTop;
