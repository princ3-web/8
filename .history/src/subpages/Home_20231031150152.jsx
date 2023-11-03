import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import image1 from "../assets/images/1.jpg";


const Home = () => {
  return <Box>
    <CardMedia component="img" src={image1} alt=""/>
    <Typography>Internal & Family Medicine</Typography>
  </Box>;
};

export default Home;
