import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import { blue } from "@mui/material/colors";

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
    <Box
      sx={{ display: "flex", justifyContent: "space-between", boxSizing: "border-box", px: "80px", backgroundColor: }}
    >
      <Box>
        <CardMedia component="img" src={logo} alt="" sx={{ width: "100px" }} />
      </Box>

      {items.map((item) => (
        <Typography>{item}</Typography>
      ))}
    </Box>
  );
};

export default Navbar;
