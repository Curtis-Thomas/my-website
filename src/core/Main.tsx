import { Box, Typography } from "@mui/material";

import HeroBackground from "../components/HeroBackground";
import Hero from "../components/Hero";

function Main() {
  return (
    <Box>
      <HeroBackground />

      <Box
        sx={{
          height: "100vh",
          boxShadow: "inset 0 0 100px 1px rgba(0, 0, 0, 0.4)",
        }}
      >
        <Hero />
      </Box>
      <Box sx={{ backgroundColor: "black", height: "50vh" }}>
        <Typography>Section</Typography>
      </Box>
    </Box>
  );
}

export default Main;
