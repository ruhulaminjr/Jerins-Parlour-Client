import { Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../../../Shared/PrimaryButton/PrimaryButton";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ my: 6 }}>
      <Paper sx={{ py: 4, px: 2 }}>
        <form onClick={handleSubmit(onSubmit)}>
          <Box
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <TextField
                placeholder="Enter User Email"
                variant="outlined"
                size="small"
                {...register("Email")}
              />
              <PrimaryButton type="submit">Make Admin</PrimaryButton>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default MakeAdmin;
