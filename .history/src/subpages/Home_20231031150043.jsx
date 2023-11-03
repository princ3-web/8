import React from "react";
import { Box, CardMedia } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import image1 from "../assets/images/image1.jpg";


const Home = () => {
  return <Box>
    <CardMedia component="img" src={logo} alt=""/>
  </Box>;
};

export default Home;
