import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import Registration from "./components/Auth/Registration/Registration";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Createuser from "./components/Createuser/Createuser";
import Login from "./components/Auth/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createuser" element={<Createuser />} />
          </Routes>
        </Container>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
  );
};

export default App;
