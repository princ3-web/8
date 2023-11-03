import React from "react";
import { Box, CardMedia, Typography, Button } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import image1 from "../assets/images/1.jpg";
import { green, grey } from "@mui/material/colors";

const Home = () => {

  const items0 = [
    {
      title: "AMBULATORY",
      text: "This is the text for Category 1",
      icon: "icon-1.png"
    },
    {
      title: "VACCINATION",
      text: "This is the text for Category 2",
      icon: "icon-2.png"
    },
    {
      title: "GENERAL SURGERY",
      text: "This is the text for Category 3",
      icon: "icon-3.png"
    },
    {
      title: "PHYSICIANS",
      text: "This is the text for Category 3",
      icon: "icon-3.png"
    }
  ];

  const items1 = [
    {
      title: "AMBULATORY",
      text: "This is the text for Category 1",
      icon: "icon-1.png"
    },
    {
      title: "VACCINATION",
      text: "This is the text for Category 2",
      icon: "icon-2.png"
    },
    {
      title: "GENERAL SURGERY",
      text: "This is the text for Category 3",
      icon: "icon-3.png"
    },
    {
      title: "PHYSICIANS",
      text: "This is the text for Category 3",
      icon: "icon-3.png"
    }
  ];

  return (
    <Box>
      <CardMedia component="img" src={image1} alt="" sx={{ filter: "brightness(0.8)" }} />
      <Box sx={{ position: "absolute", top: "50%", ml: "120px", border: "1px solid red" }}>
        <Typography variant="h2" sx={{ color: grey[100] }}>
          Internal & Family Medicine
        </Typography>
        <Typography variant="h4" sx={{ color: grey[100] }}>
          We are here to help and support you
        </Typography>
        <Button sx={{ backgroundColor: green[400], color: grey[100], py: "1rem", px: "2rem" }}>
          FIND MORE
        </Button>
      </Box>
      <Box sx={{position:"absolute", top: "50%", ml: "120px",}}>
        <Box></Box>
        {items0.map(item => <Box>{item.title}</Box>)}
      </Box>
    </Box>
  );
};

export default Home;
