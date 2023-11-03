import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import image1 from "../assets/images/1.jpg";
import { grey } from "@mui/material/colors";

const Home = () => {
  return (
    <Box >
      <CardMedia component="img" src={image1} alt="" sx={{filter:"brightness(0.8)"}}  />
      <Box>
      <Typography variant="h2" sx={{ color: grey[100], position: "absolute", top: "50%", ml: "120px" }}>
        Internal & Family Medicine
      </Typography>
      <Typography variant="h4" sx={{ color: grey[100], position: "absolute", top: "50%", ml: "120px" }}>
        We are here to help and support you
      </Typography>
    </Box>
  );
};

export default Home;
