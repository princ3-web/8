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
      <Menu/>
    </Box>
  );
};



export default Home;
