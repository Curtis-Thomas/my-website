import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";

function BtnRoutingHero({
  btnName,
  route,
}: {
  btnName: string;
  route: string;
}) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          height: "10vh",
          width: "70%",
          display: "flex",
          justifyContent: "center",
          border: "2px solid #16181D",
          borderLeftWidth: 0,
          borderRadius: "4px",

          mb: 2,
        }}
      >
        <Button
          sx={{
            backgroundColor: theme.palette.background.default,
            width: "100%",
            height: "100%",
            color: theme.palette.text.primary,
            borderLeft: "10px solid",
            "&:hover": {
              backgroundColor: theme.palette.background.default,
              width: "100%",
              height: "100%",
              color: theme.palette.text.secondary,
              outline: "1px solid",

              opacity: 0.7,
            },
          }}
          onClick={handleClick}
        >
          <Box>
            {" "}
            <Typography
              sx={{
                color: theme.palette.text.secondary,
              }}
              variant="h5"
            >
              {btnName}
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
}

export default BtnRoutingHero;
