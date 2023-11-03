import { Box } from "@mui/material";
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
        "APPOINTMENT",
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
      }}
    >
      {items.map((item) => (
        <Box sx={{ display: "flex", width: "25%", justifyContent: "center" }}>
          <Typography sx={{color: grey[100]}}>{item.title}</Typography>
          <Typo
        </Box>
      ))}
    </Box>
  );
};

export default Subbar;
