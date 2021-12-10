import { Paper, Typography } from "@mui/material";
import React from "react";
const Service = ({ item }) => {
  return (
    <Paper
      sx={{
        py: 2,
        px: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
      }}
      elevation={1}
    >
      <img src={item.img} alt="" width="72" />
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {item.title}
      </Typography>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", color: "#F63E7B", fontWeight: "bold" }}
      >
        ${item.price}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        {item.description}
      </Typography>
    </Paper>
  );
};

export default Service;
