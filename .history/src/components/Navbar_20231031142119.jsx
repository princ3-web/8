import React from "react";
import { Box } from "@mui/material";

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
    "CONTACT"
  ];

  return <Box>
    {items.map(item => <Typo)}
  </Box>;
};

export default Navbar;
