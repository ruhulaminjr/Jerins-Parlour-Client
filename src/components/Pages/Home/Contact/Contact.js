import { Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <Box sx={{ py: 4, background: "#FFF8F5" }}>
      <Container>
        <Box>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Let us handle your <br /> project, professionally.
          </Typography>
          {/* contact form section  */}
          <Box
            sx={{
              my: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <form>
              <Grid
                container
                spacing={3}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  px: 2,
                }}
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    label="First Name"
                    sx={{ backgroundColor: "#FFFFFF" }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Last Name"
                    sx={{ backgroundColor: "#FFFFFF" }}
                    item
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email Address"
                    sx={{ backgroundColor: "#FFFFFF" }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Phone Number"
                    sx={{ backgroundColor: "#FFFFFF" }}
                    item
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    label="Your Message"
                    sx={{ backgroundColor: "white" }}
                    rows={4}
                  />
                </Grid>
                <Grid item>
                  <PrimaryButton>Send Message</PrimaryButton>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
