import {
  Avatar,
  AvatarProps,
  Button,
  ButtonProps,
  styled,
} from "@mui/material";
import { purple } from "@mui/material/colors";

export const Signup = styled(Button)<ButtonProps>(({}) => ({
  padding: "7px 15px",
  color: "#00a857",
  borderColor: "green",
  textTransform: "none",
  "&:hover": {
    borderColor: "#006838",
  },
}));

export const Login = styled(Button)<ButtonProps>(({}) => ({
  color: "black",
  background: "#00ce67",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#006838",
  },
}));

export const Logout = styled(Button)<ButtonProps>(({}) => ({
  padding: "5px 12px",
  color: "#ffffff",
  borderColor: "green",
  textTransform: "none",
  "&:hover": {
    borderColor: "#006838",
  },
}));

