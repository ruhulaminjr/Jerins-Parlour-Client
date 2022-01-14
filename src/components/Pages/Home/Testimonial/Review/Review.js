import { Avatar, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Review = () => {
  return (
    <Paper
      sx={{ display: "flex", flexDirection: "column", gap: "15px", p: 2 }}
      elevation={0}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://randomuser.me/api/portraits/women/63.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <Box>
          <Typography variant="h6">RDJ Ruhul</Typography>
          <Typography variant="body2">CEO,Parlour</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat
        </Typography>
      </Box>
      <Box>
        <Rating name="read-only" value={5} readOnly />
      </Box>
    </Paper>
  );
};

export default Review;
