import { Button, Paper, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../hooks/useAuth";
import PrimaryButton from "../../../../Shared/PrimaryButton/PrimaryButton";

const AddService = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const MySwal = withReactContent(Swal);

  const types = ["image/png", "image/jpeg"];
  const { storage, ref, uploadBytesResumable, getDownloadURL } = useAuth();
  const onSubmit = (data) => {
    const imgfile = data.img[0];
    if (imgfile && types.includes(imgfile.type)) {
      const newImage = ref(storage, imgfile.name);
      const uploadTask = uploadBytesResumable(newImage, imgfile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progressx =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressx);
        },
        (error) => {
          setError("Something Went wrong");
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            data.img = downloadURL;
            console.log(data);
            axios
              .post("http://localhost:5000/addservice", data)
              .then((Result) => {
                if (Result.data.acknowledged) {
                  Swal.fire({
                    icon: "success",
                    title: "Service Add To Database Succesfully",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                  reset();
                  setSuccess(true);
                  setProgress(null);
                }
              });
          });
        }
      );
    } else {
      setError("Please Select Image File jpeg or png");
      setSuccess(false);
    }
  };
  return (
    <Box sx={{ my: 3 }}>
      <Paper variant="outlined" sx={{ px: 4, py: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{ display: { lg: "flex", gap: "20px" }, width: { lg: "60%" } }}
          >
            <div style={{ flexGrow: 1 }}>
              <Typography>Service Title</Typography>
              <TextField
                placeholder="Enter title"
                variant="outlined"
                size="small"
                fullWidth
                {...register("title")}
              />
            </div>
            <div>
              <Typography sx={{ mt: { xs: 2, lg: 0 } }}>Image</Typography>
              <Button variant="outlined" component="label">
                Upload Image
                <input type="file" hidden required {...register("img")} />
              </Button>
            </div>
          </Box>
          <Box style={{ margin: "20px 0" }} sx={{ width: { lg: "49.5%" } }}>
            <Typography>Description</Typography>
            <TextField
              multiline
              rows={4}
              placeholder="Enter Description"
              fullWidth
              {...register("description")}
            />
          </Box>
          <div>
            <Typography>Service Price</Typography>
            <TextField
              label="Price"
              variant="outlined"
              size="small"
              type="number"
              sx={{ mb: 2 }}
              {...register("price")}
            />
          </div>
          <PrimaryButton type="submit">Add Service</PrimaryButton>
        </form>
      </Paper>
    </Box>
  );
};

export default AddService;
