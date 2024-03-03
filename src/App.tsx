import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box, ThemeProvider } from "@mui/material";

import Main from "./core/Main";
import Footer from "./core/Footer";

import theme from "./theme";

const routeConfig = [{ path: "/", component: Main }];

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            // background: "linear-gradient(to top right, #124559, #01161e)",
            color: theme.palette.text.primary,
          }}
        >
          <Box sx={{ minHeight: "95vh" }}>
            <Routes>
              {/* Render the routes based on the routeConfig */}
              {routeConfig.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Box>
          <Box sx={{ height: "5vh" }}>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
