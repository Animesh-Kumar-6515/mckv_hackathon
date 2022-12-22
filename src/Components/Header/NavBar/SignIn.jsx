import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from "react";

const SignIn = () => {

    const [anchorLang, setAnchorLang] = useState(null);
    const openLang = Boolean(anchorLang);

    const handleLang = (event) => {
      setAnchorLang(event.currentTarget);
    }
    const handleLangClose = () => {
      setAnchorLang(null);
    }

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: {xs:'10%', lg:'20%'},
    }}>
      <Box sx={{display:{xs:'none', md:'flex'}}}>
        <IconButton
            onClick={handleLang}>
          <LanguageIcon />
        </IconButton>
        <Menu open={openLang} onClose={handleLangClose} anchorEl={anchorLang}>
          <MenuItem onClick={handleLangClose}>Hindi</MenuItem>
          <MenuItem onClick={handleLangClose}>Bengali</MenuItem>
          <MenuItem onClick={handleLangClose}>English</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Button startIcon={<AccountCircleIcon />} >
            <Typography sx={{display:{xs: 'none', lg:'block'}}}>SignIn or LogIn</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
