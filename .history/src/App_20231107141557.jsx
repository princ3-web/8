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

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Lato, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <MessengerWidget />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Subbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
