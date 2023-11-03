import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import { blue, grey } from "@mui/material/colors";
import PhoneIcon from "@mui/icons-material/Phone";

const Navbar = () => {
  const items = ["CLINICS", "SERVICES", "DOCTORS", "TIMETABLE", "PAGES", "BLOG", "SHOP", "CONTACT"];

  return (
    <Box>
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: "0.5rem",
            borderRadius: ".5rem",
            backgroundColor: blue[600],
          }}
        >
          <PhoneIcon sx={{ color: grey[100], fontSize: "20px", mr:"0.25" }} />
          <Typography color={grey[100]}>+48 662 047 277</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
