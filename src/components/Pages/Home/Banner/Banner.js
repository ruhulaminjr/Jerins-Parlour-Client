import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import bannerimg from "../../../../Image_Icon/Image/bannerimg.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";


const Banner = () => {
  return (
    <Container sx={{ my: 2 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,

              letterSpacing: "1%",
              mb: 3,
            }}
          >
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "#666666" }}
            style={{ maxWidth: "80%" }}
          >
            Beauty salons have proliferated throughout Dhaka city. You can get
            anything from a haircut and hair coloring to a full bridal makeover
          </Typography>
          <PrimaryButton sx={{ my: 3 }}>Get an Appointment</PrimaryButton>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img
            src={bannerimg}
            alt=""
            width="484"
            height="478"
            style={{ maxWidth: "95%", maxHeight: "100%" }}
          />
        </Grid>
        
        
      </Grid>
    </Container>
  );
};

export default Banner;


