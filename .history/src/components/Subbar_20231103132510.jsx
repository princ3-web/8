import { Box, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import React from "react";

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
    { title: "NEWSLETTER", items: [] },
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
        justifyContent:"space-between"
      }}
    >
      {items.map((item) => (
        <Box sx={{ display: "flex", flexDirection:"column", width: "22%"}}>
          <Typography sx={{color: grey[100], mb:"1rem"}}>{item.title}</Typography>
          {item.items.map(item => <Typography sx={{color: grey[400], fontSize: "12px", mb:"0.5rem"}}>{item}</Typography>)}
        </Box>
      ))}
    </Box>
  );
};

export default Subbar;
