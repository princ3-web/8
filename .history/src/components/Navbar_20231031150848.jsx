import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import { blue, grey } from "@mui/material/colors";

const Navbar = () => {
  const items = [
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
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        px: "120px",
        backgroundColor: blue[400],
        height: "80px",
      }}
    >
      <Box>
        <CardMedia component="img" src={logo} alt="" sx={{ width: "100px" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "60%",
        }}
      >
        {items.map((item) => (
          <Typography variant="subtitle2" sx={{ color: grey[100] }}>
            {item}
          </Typography>
        ))}
      </Box>
      <Box sx={{backgroundColor: }}>
        <Typography color={grey[100]}>+48 662 047 277</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
