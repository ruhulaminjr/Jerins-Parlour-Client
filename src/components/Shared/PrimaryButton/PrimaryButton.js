import { Button } from "@mui/material";
import { styled } from "@mui/system";

const PrimaryButton = styled(Button)({
  backgroundColor: "#F63E7B",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#F63E7B",
    opacity: ".8",
  },
});

export default PrimaryButton;
