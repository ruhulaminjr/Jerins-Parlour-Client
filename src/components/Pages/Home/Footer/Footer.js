import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ py: 4, background: "#F63E7B" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row", lg: "row" },
              }}
            >
              <LocationOnIcon sx={{ color: "white" }} />
              <Typography
                variant="p"
                sx={{ color: "#fff", textAlign: "center" }}
              >
                H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka,
                Bangladesh
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Company
              </Typography>
              <Box>
                <ul style={{ listStyle: "none", color: "#fff" }}>
                  <li>About</li>
                  <li>Project</li>
                  <li>Our Team</li>
                  <li>Terms Conditions</li>
                  <li>Submit Listing</li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                Quick Links
              </Typography>
              <Box>
                <ul style={{ listStyle: "none", color: "#fff" }}>
                  <li>Rental</li>
                  <li>Sales</li>
                  <li>Contact</li>
                  <li>Our Blog</li>
                  <li>Take Appoinment</li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap:"15px"
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                About Us
              </Typography>
              <Typography
                variant="p"
                sx={{ color: "#fff", textAlign: "center" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FacebookIcon sx={{ color: "white" }} />
                <InstagramIcon sx={{ color: "white" }} />
                <LinkedInIcon sx={{ color: "white" }} />
                <YouTubeIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
