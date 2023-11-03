import React, {useState} from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import logo from "../assets/icons/logo.png";
import { blue, grey } from "@mui/material/colors";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { AppBar, Toolbar, Button, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const items = ["CLINICS", "SERVICES", "DOCTORS", "TIMETABLE", "PAGES", "BLOG", "SHOP", "CONTACT"];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box>
       <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            My Navbar
          </Typography>
          <Button color="inherit" onMouseEnter={handleMenuClick} onM>
            Item 1
          </Button>
          <Button color="inherit" onMouseEnter={handleMenuClick}>
            Item 2
          </Button>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Dropdown Item 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Dropdown Item 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Dropdown Item 3</MenuItem>
      </Menu>
    </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "40px",
          width: "100%",
          backgroundColor: grey[900],
          pl: "160px",
          boxSizing: "border-box",
        }}
      >
        <AccessTimeFilledIcon sx={{ color: grey[100], fontSize: "14px", mr: "0.25rem" }} />
        <Typography color={grey[400]} variant="subtitle2">
          Opened 8:00-19:00 from mondays to fridays
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          px: "160px",
          backgroundColor: blue[400],
          height: "60px",
        }}
      >
        <Box>
          <CardMedia component="img" src={logo} alt="" sx={{ height: "30px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "50%",
            height: "100%",
          }}
        >
          {items.map((item) => (
            <Typography sx={{ color: grey[100], fontSize: "12px", ":hover":{cursor:"pointer", color: blue[100]} }}>{item}</Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: "0.5rem",
            borderRadius: ".5rem",
            backgroundColor: blue[500],
          }}
        >
          <PhoneIcon sx={{ color: grey[100], fontSize: "20px", mr: "0.25rem" }} />
          <Typography color={grey[100]}>+48 662 047 277</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
