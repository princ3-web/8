import React from "react";
import { Box } from "@mui/material";

import { useInView } from "react-intersection-observer";

const Animated = ({ children, style }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <Box ref={ref}>
      <Box
        style={{
          filter: !inView ? "opacity(0)" : "opacity(1)",
          transform: !inView ? "translate(0%, -5%)" : "translate(0%, 0%)",
          transition: "2s",
          ...style
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Animated;
