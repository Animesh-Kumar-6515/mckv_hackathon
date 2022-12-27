import React from "react";
import InputBase from "@mui/material/InputBase";
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchbarTop = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <InputBase
            sx={{
              padding: "3px",
              width: "100%",
              height: "56px",
              border: "1px solid #ccc",
            }}
            placeholder="City Address, Landmark, Airport, Hotel "
            inputProps={{ "aria-label": "search google maps" }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default SearchbarTop;
