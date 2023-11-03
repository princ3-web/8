import React, { useEffect, useState } from "react";
import { Box, CardMedia, Typography, Button, Fade, Grid } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";
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

  return (
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
  );
};

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

  const images = [image1, image2, image3, image4];

  const items = [
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

  const services = [
    "DENTAL CLEANING",
    "TOOTH EXTRACTION",
    "ORTHODONTICS",
    "ORAL SURGERY",
    "ROOT CANAL TREATMENT",
    "COSMETIC DENTISTRY",
    "PEDIATRIC DENTISTRY",
    "PERIODONTICS",
    "ENDODONTICS",
    "PROSTHODONTICS",
    "IMPLANT DENTISTRY",
    "ORAL PATHOLOGY",
    "ORAL MEDICINE",
  ];

  const items1 = [
    {
      title: "Healthy Smiles: Preventive Dentistry",
      text: "Maintaining oral health and preventing dental issues through regular check-ups, cleanings, and patient education.",
      image: image7,
    },
    {
      title: "Cosmetic Dentistry Essentials",
      text: "Procedures and treatments aimed at improving the appearance of the teeth and smile, such as teeth whitening, veneers, and orthodontic options.",
      image: image8,
    },
    {
      title: "Orthodontics Simplified",
      text: "Diagnosis, prevention, and correction of misaligned teeth and jaws through treatments like braces and aligners to enhance both oral function and aesthetics.      ",
      image: image9,
    },
  ];

  return (
    <Box>
      <SingleCarousel images={images} />

      <Box sx={{ position: "absolute", top: "60%", left: "160px", zIndex: 1 }}>
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
      <Menu />
      <Box sx={{ boxSizing: "border-box", px: "160px", py: "120px" }}>
        <Typography variant="h3">Who we are</Typography>
        <Box sx={{ display: "flex", width: "50%" }}>
          <CardMedia
            component="img"
            src={image1}
            alt=""
            sx={{ width: "300px", height: "300px", mt: "1rem" }}
          />
          <Box sx={{ p: "1rem" }}>
            <Typography variant="h5" sx={{ mb: "1rem" }} color={blue[900]}>
              Prodent Dentist Services is a leading dental care provider
            </Typography>

            <Typography variant="subtitle2">
              At Prodent Dentist Services, we believe in the importance of personalized care. We
              take the time to listen to your concerns, answer your questions, and tailor our
              services to your unique needs. Whether you require a simple dental cleaning or more
              complex procedures, our commitment to excellence remains unwavering.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: grey[200], display: "flex" }}>
        <CardMedia component="img" src={image5} alt="" sx={{ width: "50%", height: "100%" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            p: "4rem",
          }}
        >
          {items.map((item) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                height: "50%",
              }}
            >
              <CardMedia
                component="img"
                src={item.icon}
                alt=""
                sx={{ width: "80px", mr: "1rem", filter: "brightness(0)" }}
              />
              <Box>
                <Typography sx={{ fontWeight: 900 }}>{item.title}</Typography>
                <Typography sx={{ fontSize: 14, color: grey[700], mt: "0.5rem" }}>
                  {item.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ backgroundColor: blue[500], boxSizing: "border-box", px: "160px", py: "4rem" }}>
        <Typography variant="h4" sx={{ color: grey[100], mb: "2rem" }}>
          Services
        </Typography>
        <Grid container sx={{ width: "50%" }}>
          {services.map((item, index) => (
            <Grid item lg={6} key={index}>
              <Typography variant="subtitle2" sx={{ color: grey[100], mb: "1rem", ml: "1rem" }}>
                {" "}
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: grey[200], display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            p: "4rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "75%",
              height: "75%",
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>
                ORTHODONTICS
              </Typography>
              <Typography sx={{ fontSize: 16, color: grey[700], mt: "0.5rem" }}>
                Orthodontics dental services focus on correcting misaligned teeth and bite issues to
                enhance both oral health and aesthetics. Our experienced orthodontists offer a range
                of treatments, including braces and clear aligners, tailored to meet individual
                needs. Achieve a straighter, healthier smile with our expert orthodontic care.
              </Typography>
            </Box>
          </Box>
        </Box>
        <CardMedia component="img" src={image6} alt="" sx={{ width: "50%", height: "100%" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: "4rem",
        }}
      >
        <Typography variant="h5" sx={{ width: "40%", textAlign: "center", fontWeight: 900, mb:"2rem" }}>
          Medical news and health news headlines posted throughout the day, every day.
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            px: "160px",
            boxSizing: "border-box",
          }}
        >
          {items1.map((item) => (
            <Box sx={{ position: "relative", width: "30%", ":hover":{filter:opacity(0.8)"  }}>
              <CardMedia"
                component="img"
                src={item.image}
                alt=""
                sx={{ width: "100%", height: "30rem" }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "2rem",
                  color: grey[100],
                  fontWeight: 900,
                  textAlign:"center",
                  borderBottom: "1px solid " + blue[400],
                  margin: "0 auto",
                  left: 0,
                  right: 0,
                  width: "75%",
                  pb: "0.25rem"
             
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
