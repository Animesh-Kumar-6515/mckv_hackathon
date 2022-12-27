import React from "react";
import { Button } from "@mui/material";

const SearchbarBottom = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          height: "56px",
          fontSize: "18px",
          backgroundColor: "#ffb612",
          color: "#000",
          borderRadius: "0px",
        }}
      >
        FIND HOTELS
      </Button>
    </>
  );
};

export default SearchbarBottom;
