import { Box } from "@mui/system";
import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <Box sx={{ background: "#FFF8F5",maxWidth:"100%" }}>
      <Navbar />
      <Banner />
    </Box>
  );
};

export default Header;
