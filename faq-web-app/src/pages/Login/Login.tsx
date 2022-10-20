import { Container, TextField } from "@mui/material";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { OkButton } from "../../assets/Styles/Button/Button";
import { TextInput } from "../../assets/Styles/TextField/TextField";
import { login } from "../../store/reducers/auth-slice";
import { useAppDispatch } from "../../store/hooks";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [enteredUsernameOrEmailText, setEnteredUsernameOrEmailText] =
    useState<string>();
  const [enteredPasswordText, setEnteredPasswordText] = useState<string>();
  const navigation = useNavigate();

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      login({
        emailOrUsername: enteredUsernameOrEmailText!,
        password: enteredPasswordText!,
      })
    );
    navigation("/");
  };
  return (
    <Container maxWidth="sm">
      <div className="item-container">
        <h2>Please Log in</h2>
        <form>
          <TextInput
            label="Username or Email"
            defaultValue={enteredUsernameOrEmailText}
            multiline
            onChange={(e) => setEnteredUsernameOrEmailText(e.target.value)}
          />
          <TextInput
            label="Password"
            type="password"
            autoComplete="current-password"
            defaultValue={enteredPasswordText}
            onChange={(e) => setEnteredPasswordText(e.target.value)}
          />

          <OkButton onClick={loginHandler}>Login</OkButton>
        </form>
      </div>
    </Container>
  );
};

export default Login;
