import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { googleLogin, setError } = useAuth();
  const Navigate = useNavigate();
  const loginHandler = () => {
    googleLogin()
      .then((result) => {
        Navigate("/");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">Login</Typography>
        <Button
          variant="outlined"
          sx={{
            width: { xs: "100%", lg: "457px" },
            py: 2,
            px: 4,
            color: "#222",
            borderColor: "gray",
            borderRadius: "30px",
          }}
          onClick={loginHandler}
        >
          <img
            src="https://assets.materialup.com/uploads/3a91ac9f-f60f-4370-b58b-171d988c3b4b/preview.jpg"
            alt=""
            width="45"
          />{" "}
          Login in With Google
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
