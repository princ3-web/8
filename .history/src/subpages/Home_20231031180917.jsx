import React from "react";
import { Box, CardMedia, Typography, Button } from "@mui/material";
import logo from "../assets/images/logo.png";
import image1 from "../assets/images/1.jpg";
import icon from "../assets/images/tooth.png";
import { green, grey, blue } from "@mui/material/colors";

const Home = () => {
  const items0 = [
    {
      title: "AMBULATORY",
      text: "This is the text for Category 1",
      icon: icon,
    },
    {
      title: "VACCINATION",
      text: "This is the text for Category 2",
      icon: icon,
    },
    {
      title: "GENERAL SURGERY",
      text: "This is the text for Category 3",
      icon: icon,
    },
    {
      title: "PHYSICIANS",
      text: "This is the text for Category 3",
      icon: icon,
    },
  ];

  const items1 = [
    {
      title: "APPOINTMENTS",
      text: "This is the text for Category 1",
      icon: icon,
    },
    {
      title: "SERVICES",
      text: "This is the text for Category 2",
      icon: icon,
    },
    {
      title: "TEST RESULTS",
      text: "This is the text for Category 3",
      icon: icon,
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
          <Box>
            <Ca
            <Box>
            <Typography>a</Typography>
            <Typography>v</Typography>
            <Typography>c</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          {items0.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: blue[400],
                width: "25%",
                height: "300px",
                outline: "1px solid " + blue[600],
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: "1rem" }}>
                <CardMedia component="img" src={icon} alt="" sx={{ width: "40px", mr: "1rem" }} />
                <Typography color={grey[100]}>{item.title}</Typography>
              </Box>
              <Typography color={grey[100]} variant="subtitle2">
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
