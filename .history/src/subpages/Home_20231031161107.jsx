import React from "react";
import { Box, CardMedia, Typography, Button } from "@mui/material";
import logo from "../assets/images/logo.jpg";
import image1 from "../assets/images/1.jpg";
import icon from "../assets/images/1.jpg";
import { green, grey, blue } from "@mui/material/colors";

const Home = () => {
  const items0 = [
    {
      title: "AMBULATORY",
      text: "This is the text for Category 1",
      icon: "icon-1.png",
    },
    {
      title: "VACCINATION",
      text: "This is the text for Category 2",
      icon: "icon-2.png",
    },
    {
      title: "GENERAL SURGERY",
      text: "This is the text for Category 3",
      icon: "icon-3.png",
    },
    {
      title: "PHYSICIANS",
      text: "This is the text for Category 3",
      icon: "icon-3.png",
    },
  ];

  const items1 = [
    {
      title: "AMBULATORY",
      text: "This is the text for Category 1",
      icon: "icon-1.png",
    },
    {
      title: "VACCINATION",
      text: "This is the text for Category 2",
      icon: "icon-2.png",
    },
    {
      title: "GENERAL SURGERY",
      text: "This is the text for Category 3",
      icon: "icon-3.png",
    },
    {
      title: "PHYSICIANS",
      text: "This is the text for Category 3",
      icon: "icon-3.png",
    },
  ];

  return (
    <Box>
      <CardMedia component="img" src={image1} alt="" sx={{ filter: "brightness(0.8)" }} />
      <Box sx={{ position: "absolute", top: "50%", left: "160px" }}>
        <Typography variant="h2" sx={{ color: grey[100] }}>
          Internal & Family Medicine
        </Typography>
        <Typography variant="h4" sx={{ color: grey[100] }}>
          We are here to help and support you
        </Typography>
        <Button
          sx={{ backgroundColor: green[400], color: grey[100], py: "1rem", px: "2rem", mt: "1rem" }}
        >
          FIND MORE
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          boxSizing: "border-box",
          top: "50%",
          px: "160px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: grey[100],
            width: "25%",
            height: "300px",
          }}
        >
          abadbb
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          {items0.map((item) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: blue[400],
                width: "25%",
                height: "300px",
              }}
            >
              <Typography>{item.title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
