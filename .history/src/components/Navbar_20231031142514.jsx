import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";

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
      {items.map((item) => (
        <Box></Box>
        <Typography>{item}</Typography>
      ))}
    </Box>
  );
};

export default Navbar;
