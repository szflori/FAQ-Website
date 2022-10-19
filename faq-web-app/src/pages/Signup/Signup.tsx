import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OkButton } from "../../assets/Styles/Button/Button";
import { TextInput } from "../../assets/Styles/TextField/TextField";
import { User } from "../../models/user";
import { AuthContext } from "../../store/auth-context";
import { signup } from "../../store/authSlice";
import { useAppDispatch } from "../../store/hooks";

const Signup: React.FC = () => {
  const dispatch = useAppDispatch();
  const [enteredUsernameText, setEnteredUsernameText] = useState<string>();
  const [enteredEmailText, setEnteredEmailText] = useState<string>();
  const [enteredPasswordText, setEnteredPasswordText] = useState<string>();
  const navigation = useNavigate();

  const signupHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const user: User = {
      id: Math.round(Math.floor(Math.random() * 100)).toString(),
      username: enteredUsernameText!,
      email: enteredEmailText!,
      password: enteredPasswordText!,
    };
    dispatch(signup(user));
    navigation("/login");
  };
  return (
    <Container maxWidth="sm">
      <div className="item-container">
        <h2>Create Account</h2>
        <form>
          <TextInput
            label="Username"
            defaultValue={enteredUsernameText}
            multiline
            onChange={(e) => setEnteredUsernameText(e.target.value)}
          />
          <TextInput
            label="Email"
            defaultValue={enteredEmailText}
            multiline
            onChange={(e) => setEnteredEmailText(e.target.value)}
          />
          <TextInput
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            defaultValue={enteredPasswordText}
            onChange={(e) => setEnteredPasswordText(e.target.value)}
          />
          <OkButton onClick={signupHandler}>Signup</OkButton>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
