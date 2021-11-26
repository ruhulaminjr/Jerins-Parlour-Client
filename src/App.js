import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Home from "./components/Pages/Home/Home/Home";
import AuthContext from "./context/AuthContext";
import Login from "./components/Pages/Register/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
const theme = createTheme();

theme.typography.h1 = {
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
    lineHeight: "60px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
};

function App() {
  return (
    <AuthContext>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext>
  );
}

export default App;
