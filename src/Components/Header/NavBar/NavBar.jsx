import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavTitles from "./NavTitles";
import SignIn from "./SignIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openExplore, setOpenExplore] = useState(false);
  const [openLoyalty, setOpenLoyalty] = useState(false);

  const drawer = (
    <div>
      <Toolbar sx={{ display: "flex", justifyContent: "flex-start" }}>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h6"
          fontFamily="sans-serif"
          paddingLeft="40px"
          color="#0A66C2"
        >
          World Of Hyatt
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setOpenExplore(!openExplore)}>
          <ListItemText primary="Explore" />
            {openExplore ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openExplore} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Hotel & Resorts" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Our Brands" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary='Offers' />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary='Meetings & Events'/>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => setOpenLoyalty(!openLoyalty)}>
            <ListItemText>Loyalty Program</ListItemText>
            {openLoyalty ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openLoyalty} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Program Overview" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Earn" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Reedem" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Tiers & Benifits" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
      </List>
    </div>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "10px 10px", sm: "10px 20px" },
        borderBottom: "1px solid black",
      }}
    >
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          width: "50%",
          [`& .MuiDrawer-paper`]: { width: "75%" },
        }}
      >
        {drawer}
      </Drawer>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Box sx={{ color: "#0504aa" }} className="logo">
        <Typography variant="h5" sx={{fontFamily: "'Merienda', 'cursive'"}} color="#0A66C2">
          World Of Hyatt
        </Typography>
      </Box>
      <NavTitles />
      <SignIn />
    </Box>
  );
};

export default NavBar;
