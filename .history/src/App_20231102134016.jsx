import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";
import Navbar from "./components/Navbar";
import Subbar from "./components/Subbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: "Lato, sans-serif",
    },
  });



  return (
    <ThemeProvider theme={theme}>
    <Box>
      <Box sx={{}}>
      <Navbar />
      </Box>
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
