import { Button, ButtonProps, styled } from "@mui/material";

export const OkButton = styled(Button)<ButtonProps>(({}) => ({
  color: "black",
  background: "#1dd177df",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#00ff80",
  },
}));

export const CancelButton = styled(Button)<ButtonProps>(({}) => ({
  color: "#bd004f",
  textTransform: "none",
  borderColor: "#9b0040",
  "&:hover": {
    color: "white",
    backgroundColor: "#9b0040",
    borderColor: "#9b0040",
  },
}));
