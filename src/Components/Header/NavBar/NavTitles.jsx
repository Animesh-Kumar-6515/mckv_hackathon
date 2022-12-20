import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const NavTitles = () => {
  const [openExplore, setOpenExplore] = useState(false);
  const [openLoyalty, setOpenLoyalty] = useState(false);
  const handleExplore = () => {
    setOpenExplore(!openExplore);
  };
  const handleLoyalty = () => {
    setOpenLoyalty(!openLoyalty);
  };

  return (
    <Box sx={{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'45%',
    }}>
      <Box>
        <Button
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          onClick={() => setOpenExplore(!openExplore)}
        >
          Explore
        </Button>
        <Menu open={openExplore} onClose={handleExplore}>
          <MenuItem onClick={handleExplore}>Hotels & Resorts</MenuItem>
          <MenuItem onClick={handleExplore}>Our Brands</MenuItem>
        </Menu>
      </Box>
      <Box><Button>Offers</Button></Box>
      <Box><Button>Mettings & Events</Button></Box>
      <Box>
        <Button
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          onClick={() => setOpenLoyalty(!openLoyalty)}
        >
          Loyalty Program
        </Button>
        <Menu open={openLoyalty} onClose={handleLoyalty}>
          <MenuItem onClick={handleLoyalty}>Program Overview</MenuItem>
          <MenuItem onClick={handleLoyalty}>Earn</MenuItem>
          <MenuItem onClick={handleLoyalty}>Redeem</MenuItem>
          <MenuItem onClick={handleLoyalty}>Tiers & Benifits</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default NavTitles;
