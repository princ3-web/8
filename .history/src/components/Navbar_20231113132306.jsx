import React, { useState } from "react";
import { Box, Typography, CardMedia, Menu, MenuItem } from "@mui/material";
import { grey, brown } from "@mui/material/colors";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import logo from "../assets/icons/logo.png";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ isMobile }) => {
  const items = [
    { name: "CLINICS", items: ["Dental Clinic 1", "Dental Clinic 2", "Dental Clinic 3"] },
    { name: "SERVICES", items: ["Orthodontics", "Cosmetic Dentistry", "Preventive Dentistry"] },
    { name: "DOCTORS", items: ["Dentist 1", "Dentist 2", "Dentist 3"] },
    { name: "TIMETABLE", items: [] },
    { name: "PAGES", items: ["Home Page", "About Us", "Services Page"] },
    { name: "BLOG", items: [] },
    { name: "SHOP", items: [] },
    {
      name: "CONTACT",
      items: [],
    },
  ];

  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

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
          height: "30px",
          width: "100%",
          backgroundColor: grey[900],
          pl: isMobile ? "20px" : "160px",
          boxSizing: "border-box",
        }}
      >
        <AccessTimeFilledIcon sx={{ color: grey[100], fontSize: "12px", mr: "0.25rem" }} />
        <Typography color={grey[400]} sx={{ fontSize: "12px" }}>
          Opened 8:00-19:00 from Mondays to Fridays
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          px: isMobile ? "20px" : "160px",
          backgroundColor: brown[400],
          height: "60px",
        }}
      >
        <Box>
          <CardMedia component="img" src={logo} alt="" sx={{ height: "40px", p: "0.5rem" }} />
        </Box>
        {isMobile ? (
          <Box
            onClick={handleMobileMenuOpen}
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              cursor: "pointer",
            }}
          >
            <MenuIcon sx={{c}}/>
          </Box>
        ) : (
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
              <Box
                key={index}
                onMouseEnter={(e) => handleMenuItemHover(e, index)}
                onMouseLeave={handleMenuItemLeave}
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <Typography
                  sx={{
                    color: grey[100],
                    textDecoration: item.items.length < 1 ? "none" : "underline",
                    textUnderlineOffset: "5px",
                    fontSize: "12px",
                    ":hover": { cursor: "pointer", color: brown[100] },
                  }}
                >
                  {item.name}
                </Typography>
                <Box
                  className="dropdown-menu"
                  sx={{
                    visibility: "hidden",
                    position: "absolute",
                    backgroundColor: grey[100],
                    transition: "0.5s",
                    filter: "opacity(0)",
                    fontSize: "12px",
                    mt: "190px",
                    ml: "-10px",
                    py: "0.5rem",
                  }}
                >
                  {item.items.map((item) => (
                    <MenuItem sx={{ fontSize: "12px", p: "1rem", pr: "7rem" }}>{item}</MenuItem>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}
        {!isMobile && <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: "0.5rem",
            borderRadius: ".5rem",
            backgroundColor: brown[500],
          }}
        >
          <PhoneIcon sx={{ color: grey[100], fontSize: "20px", mr: "0.25rem" }} />
          <Typography color={grey[100]}>+48 662 047 277</Typography>
        </Box>}
      </Box>
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
      >
        {items.map((item, index) => (
          <MenuItem key={index} onClick={handleMobileMenuClose}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Navbar;
