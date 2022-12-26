import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const NavTitles = () => {
  const [anchorExplore, setAnchorExplore] = useState(null)
  const [anchorLoyalty, setAnchorLoyalty] = useState(null)
  const openExplore = Boolean(anchorExplore);
  const openLoyalty = Boolean(anchorLoyalty)
  const handleExplore = (event) => {
    setAnchorExplore(event.currentTarget);
  };
  const handleExploreClose = (event) => {
    setAnchorExplore(null);
  };
  const handleLoyalty = (event)=> {
    setAnchorLoyalty(event.currentTarget)
  }
  const handleLoyaltyClose = () => {
    setAnchorLoyalty(null);
  }

  return (
    <Box sx={{
        display: {xs:"none", md:"flex"},
        justifyContent: 'space-between',
        alignItems: 'center',
        width:{md:'63%', lg:'50%'},
    }}>
      <Box>
        <Button
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleExplore}
          sx={{color:'black',}}
        >
          Explore
        </Button>
        <Menu open={openExplore} onClose={handleExploreClose} anchorEl={anchorExplore}>
          <MenuItem onClick={handleExploreClose}>Hotels & Resorts</MenuItem>
          <MenuItem onClick={handleExploreClose}>Our Brands</MenuItem>
        </Menu>
      </Box>
      <Box><Button sx={{color:'black',}}>Offers</Button></Box>
      <Box><Button sx={{color:'black',}}>Mettings & Events</Button></Box>
      <Box>
        <Button
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleLoyalty}
          sx={{color:'black',}}
        >
          Loyalty Program
        </Button>
        <Menu open={openLoyalty} onClose={handleLoyaltyClose} anchorEl={anchorLoyalty}>
          <MenuItem onClick={handleLoyaltyClose}>Program Overview</MenuItem>
          <MenuItem onClick={handleLoyaltyClose}>Earn</MenuItem>
          <MenuItem onClick={handleLoyaltyClose}>Redeem</MenuItem>
          <MenuItem onClick={handleLoyaltyClose}>Tiers & Benifits</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default NavTitles;
