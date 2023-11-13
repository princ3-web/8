import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { brown, grey } from "@mui/material/colors";
import TextField from "@mui/material/TextField";

const Subbar = () => {
  const items = [
    {
      title: "PRODENT",
      items: [
        "At Prodent Dentist Services, our dedicated team of experienced dental professionals is committed to providing top-quality care, ensuring your smile shines with health and confidence.",
      ],
    },
    {
      title: "PAGES",
      items: [
        "HOME",
        "SERVICES",
        "CLINICS",
        "ABOUT",
        "CONTACT",
        "ORTHODONTICS",
        "COSMETIC SOLUTIONS",
      ],
    },
    { title: "RECENT NEWS", items: ["PREVENTIVE CARE", "FLU SHOTS", "LABORATORY TESTS"] },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
        backgroundColor: grey[700],
        py: { xs: "4rem", md: "6rem" }, // Adjusted padding for better spacing
        width: "100%",
        boxSizing: "border-box",
        px: "16px", // Responsive padding
        justifyContent: "space-around", // Adjusted spacing
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "22%" }, // Full width on mobile, 22% on desktop
            mb: { xs: "2rem", md: 0 }, // Adjusted margin for better spacing
          }}
        >
          <Typography sx={{ color: grey[100], mb: "1rem" }}>{item.title}</Typography>
          {item.items.map((subItem, subIndex) => (
            <Typography
              key={subIndex}
              sx={{
                color: grey[400],
                fontSize: "12px",
                mb: "0.5rem",
                cursor: "pointer",
                ":hover": { color: grey[100] },
              }}
            >
              {subItem}
            </Typography>
          ))}
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "22%" }, // Full width on mobile, 22% on desktop
        }}
      >
        <Typography sx={{ color: grey[100], mb: "1rem" }}>Newsletter</Typography>
        <Typography
          sx={{
            color: grey[400],
            fontSize: "12px",
            mb: "0.5rem",
            cursor: "pointer",
            ":hover": { color: grey[100] },
          }}
        >
          Receive our latest news to your inbox
        </Typography>
        <TextField label="Your e-mail" variant="outlined" color="info" />
        <Button
          sx={{
            backgroundColor: brown[400],
            color: grey[100],
            py: "0.5rem",
            px: "1rem",
            mt: "1rem",
            width: "100%", // Full width on both mobile and desktop
            "&:hover": {
              backgroundColor: brown[700],
              cursor: "pointer",
            },
          }}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
};

export default Subbar;
