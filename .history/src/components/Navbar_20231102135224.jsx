import React from "react";
import { Box, Typography, CardMedia, Menu, MenuItem } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
  const items = ["CLINICS", "SERVICES", "DOCTORS", "TIMETABLE", "PAGES", "BLOG", "SHOP", "CONTACT"];

  const handleMenuItemHover = (event, index) => {
    const dropdownMenu = event.currentTarget.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      dropdownMenu.style.visibility = "visible";
      dropdownMenu.style.filter = "opacity(1)";
    }
  };

  const handleMenuItemLeave = (event) => {
    const dropdownMenu = event.currentTarget.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      dropdownMenu.style.visibility = "hidden";
      dropdownMenu.style.filter = "opacity(0)";
    }
  };

  return (
    <Box sx={{ position: "relative", zIndex: 2 }}>
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
          Opened 8:00-19:00 from Mondays to Fridays
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
          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={(e) => handleMenuItemHover(e, index)}
              onMouseLeave={handleMenuItemLeave}
            >
              <Typography
                sx={{
                  color: grey[100],
                  fontSize: "12px",
                  ":hover": { cursor: "pointer", color: blue[100] },
                }}
              >
                {item}
              </Typography>
              <Box
                className="dropdown-menu"
                sx={{
                  visibility: "hidden",
                  position: "absolute",
                  backgroundColor: grey[100],
                  transition: "0.5s",
                  filter: "opacity(0)",
                  fontSize: "12px"
                }}
              >
                <MenuItem s>Submenu 1</MenuItem>
                <MenuItem>Submenu 2</MenuItem>
                <MenuItem>Submenu 3</MenuItem>
              </Box>
            </div>
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
