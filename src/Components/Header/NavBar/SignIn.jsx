import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";

const SignIn = () => {
  const [anchorLang, setAnchorLang] = useState(null);
  const openLang = Boolean(anchorLang);

  const handleLang = (event) => {
    setAnchorLang(event.currentTarget);
  };
  const handleLangClose = () => {
    setAnchorLang(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: { xs: "10%", lg: "20%" },
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton onClick={handleLang}>
          <LanguageIcon />
        </IconButton>
        <Menu open={openLang} onClose={handleLangClose} anchorEl={anchorLang}>
          <MenuItem onClick={handleLangClose}>Hindi</MenuItem>
          <MenuItem onClick={handleLangClose}>Bengali</MenuItem>
          <MenuItem onClick={handleLangClose}>English</MenuItem>
        </Menu>
      </Box>
      <Button
        startIcon={<AccountCircleIcon fontSize="large" />}
        sx={{
          minWidth: "40px",
          color: "#282828",
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Typography>SignIn or LogIn</Typography>
      </Button>
      <IconButton sx={{display: { xs: "flex", lg: "none" }}}>
        <AccountCircleIcon/>
      </IconButton>
    </Box>
  );
};

export default SignIn;
