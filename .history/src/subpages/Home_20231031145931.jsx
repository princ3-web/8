import React from "react";
import { Box, CardMedia } from "@mui/material";
import logo from "../assets/images/logo.jpg";


const Home = () => {
  return <Box>
    <CardMedia component="img" src={logo/>
  </Box>;
};

export default Home;
