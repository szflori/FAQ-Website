import { styled, TextField, TextFieldProps } from "@mui/material";

export const TextInput = styled(TextField)({
  "& label": {
    color: "white",
  },
  " & .MuiInputBase-input": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "#00ff80",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#efefef",
    },
    "&:hover fieldset": {
      borderColor: "#00ff80",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00ff80",
    },
  },
});
