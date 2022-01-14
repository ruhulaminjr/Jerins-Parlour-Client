import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Review from "./Review/Review";

const Testimonials = () => {
  const items = [1, 2, 3];
  return (
    <Box sx={{ my: 4 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Testimonials
          </Typography>
        </Box>
        <Grid sx={{ my: 2 }} container justifyContent="center" spacing={3}>
          {items.map((item, idx) => (
            <Grid key={idx} item sm={12} md={4} lg={4}>
              <Review />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
