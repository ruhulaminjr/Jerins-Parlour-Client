import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useFetch from "../../../../hooks/useFetch";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";
import Service from "./Service/Service";

const Services = () => {
  const { data, loading } = useFetch("http://localhost:5000/getservices");
  console.log(data);
  return (
    <Box sx={{ my: 2, py: 2 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Our Awesome <span style={{ color: "#F63E7B" }}>Services</span>
        </Typography>
        <Grid container spacing={3} sx={{ my: 3 }}>
          {data.map((item) => (
            <Grid item md={4} lg={4} sm={12} key={item._id}>
              <Service item={item} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <PrimaryButton>Explore More</PrimaryButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
