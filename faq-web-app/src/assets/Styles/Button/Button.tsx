import { Button, ButtonProps, styled } from "@mui/material";

export const OkButton = styled(Button)<ButtonProps>(({}) => ({
  color: "black",
  background: "#2ca568",
  textTransform: "none",
  borderColor: "#2ca568",
  "&:hover": {
    backgroundColor: "#00ff80",
    borderColor: "#00ff80",
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

export const SignupButton = styled(Button)<ButtonProps>(({}) => ({
  color: "#3eca84",
  textTransform: "none",
  borderColor: "#42ffa1",
  "&:hover": {
    color: "black",
    backgroundColor: "#00ff80",
    borderColor: "#00ff80",
  },
}));
