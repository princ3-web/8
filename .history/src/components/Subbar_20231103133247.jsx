import { Box, Button, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import React from "react";
import TextField from '@mui/material/TextField';

const Subbar = () => {
  const items = [
    {
      title: "PRODENT",
      items: [
        "Consulting WP - Before we talk destination, we shine a spotlight across your organization to fully understand its people, processes, and technology.",
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
        backgroundColor: grey[700],
        py: "6rem",
        width: "100%",
        boxSizing: "border-box",
        px: "160px",
        justifyContent: "space-between",
      }}
    >
      {items.map((item) => (
        <Box sx={{ display: "flex", flexDirection: "column", width: "22%" }}>
          <Typography sx={{ color: grey[100], mb: "1rem" }}>{item.title}</Typography>
          {item.items.map((item) => (
            <Typography
              sx={{
                color: grey[400],
                fontSize: "12px",
                mb: "0.5rem",
                cursor: "pointer",
                ":hover": { color: grey[100] },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      ))}
         <Box sx={{ display: "flex", flexDirection: "column", width: "22%" }}>
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
            <TextField label="your e-mail" variant="standard" color="info" sx={{color: ""}} />
            <Button
                sx={{
                  backgroundColor: green[400],
                  color: grey[100],
                  py: "0.5rem",
                  px: "1rem",
                  mt: "1rem",
                  width:"160px",
                  "&:hover": {
                    backgroundColor: green[700],
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
