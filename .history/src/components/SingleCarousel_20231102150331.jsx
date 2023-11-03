import React, { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { CardMedia } from "@mui/material";

const SingleCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state === images.length - 1 ? 0 : state + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [hover]);

  const handlePrevious = () => {
    if (!transition) {
      setTransition(true);
      setIndex((state) => (state > 0 ? setIndex(state - 1) : setIndex(images.length - 1)));
      setTimeout(() => setTransition(false), 500);
    }
  };

  const handleNext = () => {
    if (!transition) {
      setTransition(true);
      setIndex((state) => (state < images.length - 1 ? setIndex(state + 1) : setIndex(0)));
      setTimeout(() => setTransition(false), 500);
    }
  };

  return (
    <Box height={"120vh"} sx={{ position: "relative", overflow: "hidden", backgroundColor: grey[900] }}>
      {images.map((item, n) => (
        <Box
          sx={{
            position: "absolute",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            height: "100%",
            transition: "1.5s",
            filter: n === index ? "Opacity(1)" : "Opacity(0)",
            transform: n === index ? "translate(-15%, 0%)" : "translate(0%, 0%)",
          }}
        >
          <CardMedia
            component="img"
            src={item}
            sx={{ height: "100%", filter: "brightness(0.8)" }}
          />

        </Box>
      ))}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          width: "96%",
          left: "2%",
          top: "50%",
        }}
      >
        <IconButton
          onClick={handlePrevious}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <KeyboardArrowLeftIcon style={{ color: grey[50], zIndex: 10, fontSize: 60 }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <KeyboardArrowRightIcon style={{ color: grey[50], zIndex: 10, fontSize: 60 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SingleCarousel;
