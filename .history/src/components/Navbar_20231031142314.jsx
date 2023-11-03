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
    <Box sx={{ display: "flex",  boxSizing: "border-box", px: "80px" }}>
      {items.map((item) => (
        <Typography>{item}</Typography>
      ))}
    </Box>
  );
};

export default Navbar;
