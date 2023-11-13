import "./App.css";
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";
import Navbar from "./components/Navbar";
import Subbar from "./components/Subbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MessengerWidget from "./components/MessengerWidget";
import { useMediaQuery } from "@material-ui/core";

function App() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const theme = createTheme({
    typography: {
      fontFamily: "Lato, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar isMobile={isMobile} />
        <MessengerWidget />
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/about" element={<About isMobile={isMobile} />} />
        </Routes>
        <Subbar isMobile/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
