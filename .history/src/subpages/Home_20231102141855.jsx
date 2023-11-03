import React, { useEffect, useState } from "react";
import { Box, CardMedia, Typography, Button, Fade } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import { green, grey, blue } from "@mui/material/colors";
import PhoneIcon from "@mui/icons-material/Phone";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BiotechIcon from "@mui/icons-material/Biotech";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
import SingleCarousel from "../components/SingleCarousel";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  console.log(currentImageIndex);

  const images = [image1, image2, image3, image4];



  return (
    <Box>
        <SingleCarousel images={images} />

      <Box sx={{ position: "absolute", top: "50%", left: "160px", zIndex: 1 }}>
        <Typography variant="h2" sx={{ color: grey[100] }}>
          Internal & Family Medicine
        </Typography>
        <Typography variant="h4" sx={{ color: grey[100] }}>
          We are here to help and support you
        </Typography>
        <Button
          sx={{
            backgroundColor: green[400],
            color: grey[100],
            py: "1rem",
            px: "2rem",
            mt: "1rem",
            "&:hover": {
              backgroundColor: green[700],
              cursor: "pointer",
            },
          }}
        >
          FIND MORE
        </Button>
      </Box>
   
    </Box>
  );
};

const Menu = () => {

  const items0 = [
    {
      title: "Preventive Dentistry",
      text: "Maintaining oral health and preventing dental issues through regular check-ups, cleanings, and patient education.",
      icon: icon1,
    },
    {
      title: "Cosmetic Dentistry",
      text: "Procedures and treatments aimed at improving the appearance of the teeth and smile, such as teeth whitening, veneers, and orthodontic options.",
      icon: icon2,
    },
    {
      title: "Orthodontics",
      text: "Diagnosis, prevention, and correction of misaligned teeth and jaws through treatments like braces and aligners to enhance both oral function and aesthetics.      ",
      icon: icon3,
    },
    {
      title: "Pediatric Dentistry",
      text: "Specialized dental care for children, focusing on their oral health needs, early prevention, and creating a positive, comfortable dental experience for young patients.      ",
      icon: icon4,
    },
  ];

  const items1 = [
    {
      title: "APPOINTMENTS",
      text: "workdays: 8:00 - 19:00",
      icon: <PhoneIcon sx={{ color: blue[400], fontSize: "50px", mr: "1rem" }} />,
    },
    {
      title: "SERVICES",
      text: "Check our list of services",
      icon: <MedicalServicesIcon sx={{ color: blue[400], fontSize: "50px", mr: "1rem" }} />,
    },
    {
      title: "TEST RESULTS",
      text: "Check your results online",
      icon: <BiotechIcon sx={{ color: blue[400], fontSize: "50px", mr: "1rem" }} />,
    },
  ];
  <Box
  sx={{
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    boxSizing: "border-box",
    top: "60%",
    px: "160px",
    width: "100%",
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: grey[100],
      width: "300px",
      height: "300px",
    }}
  >
    {items1.map((item) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "33%",
          boxSizing: "border-box",
          px: "40px",
          transition: "0.25s",
          ":hover": {
            backgroundColor: grey[300],
            cursor: "pointer",
          },
        }}
      >
        {item.icon}
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>{item.title}</Typography>
          <Typography sx={{ fontSize: "12px" }}>{item.text}</Typography>
        </Box>
        <ArrowForwardIosIcon sx={{ color: blue[400], fontSize: "16px", ml: "1rem" }} />
      </Box>
    ))}
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
          width: "300px",
          height: "300px",
          outline: "1px solid " + blue[600],
          transition: "0.25s",
          ":hover": {
            backgroundColor: blue[500],
            cursor: "pointer",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: "1rem" }}>
          <CardMedia
            component="img"
            src={item.icon}
            alt=""
            sx={{ width: "40px", mr: "1rem" }}
          />
          <Typography color={grey[100]} sx={{ fontSize: "18px" }}>
            {item.title}
          </Typography>
        </Box>
        <Typography color={grey[100]} variant="subtitle2" sx={{ px: "2rem" }}>
          {item.text}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>
}

export default Home;
