import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from "react";

const SignIn = () => {

    const [open, setOpen] = useState(false)
    const handleLanguage = () => {
        setOpen(!open);
    }

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '18%',
    }}>
      <Box>
        <IconButton 
            onClick={()=>setOpen(!open)}>
          <LanguageIcon />
        </IconButton>
        <Menu open={open} onClose={handleLanguage}>
          <MenuItem onClick={handleLanguage}>Hindi</MenuItem>
          <MenuItem onClick={handleLanguage}>Bengali</MenuItem>
          <MenuItem onClick={handleLanguage}>English</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Button startIcon={<AccountCircleIcon />}>
            SignIn or LogIn
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
