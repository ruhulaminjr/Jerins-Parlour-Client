import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import makeupimg from "../../../../Image_Icon/Image/makeup.png";
const Showcase = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: "#FFF8F5" }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={makeupimg} alt="" style={{ maxWidth: "100%" }} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <Typography variant="h4">
              Let us handle your screen{" "}
              <span style={{ color: "#F63E7B" }}>Professionally</span>.
            </Typography>
            <Typography variant="body2">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.well written
              codes, we build amazing apps for all platforms, mobile and web
              apps in general
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                px: 4,
                mt: 4,
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#F63E7B" }}
                >
                  500+
                </Typography>
                <Typography variant="body">Happy Customer</Typography>
              </Box>
              {/* 2nd box  */}
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#F63E7B" }}
                >
                  500+
                </Typography>
                <Typography variant="body">Happy Customer</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Showcase;
