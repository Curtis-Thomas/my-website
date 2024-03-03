import { Box, Typography, useTheme } from "@mui/material";
import BtnRoutingHero from "./hero/BtnRoutingHero";

function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <Box
        sx={{
          height: "25%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.palette.text.primary,
          backgroundColor: "transparent",
        }}
      >
        <Typography sx={{ textShadow: "1px 1px 1px  black" }} variant="h2">
          Curtis Thomas
        </Typography>
      </Box>
      <Box
        sx={{
          height: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>1</Typography>
        <Typography>2</Typography>
        <Typography>3</Typography>
        <Typography>4</Typography>
        <Typography>5</Typography>
      </Box>
      <Box
        sx={{
          height: "65%",
          width: "100%",
        }}
      >
        <BtnRoutingHero btnName="Projects" route="/projects" />
        <BtnRoutingHero btnName="Contact" route="/contact" />
        <BtnRoutingHero btnName="About" route="/about" />
      </Box>
    </Box>
  );
}

export default Hero;
