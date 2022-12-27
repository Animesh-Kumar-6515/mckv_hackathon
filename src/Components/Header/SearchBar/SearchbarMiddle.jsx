import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

const SearchbarMiddle = () => {
  const [value, setValue] = useState(dayjs("2014-08-18"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <Box
            sx={{
              width: "5px",
            }}
          ></Box>
          <DesktopDatePicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-around",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default SearchbarMiddle;
