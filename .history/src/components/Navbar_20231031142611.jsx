import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import logo from "../assets/images/logo.png"

const Navbar = () => {
  const items = [
    "Medical",
    "CLINICS",
    "SERVICES",
    "DOCTORS",
    "TIMETABLE",
    "PAGES",
    "BLOG",
    "SHOP",
    "CONTACT",
  ];

  return (
    <Box sx={{ display: "flex", justifyContent:"space-between", boxSizing: "border-box", px: "80px" }}>
        <Box>
          <CardMedia component="image" src={logo} alt=/>
        </Box>

      {items.map((item) => (
        <Typography>{item}</Typography>
      ))}
    </Box>
  );
};

export default Navbar;
