import React from "react";
import { Box, Typography } from "@mui/material";

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
    <Box sx={{ display: "flex", justifyContent:"space-between", boxSizing: "border-box", px: "180px" }}>
      {items.map((item) => (
        <Typography>{item}</Typography>
      ))}
    </Box>
  );
};

export default Navbar;
