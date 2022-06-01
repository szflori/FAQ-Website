import { Container, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OkButton } from "../../assets/Styles/Button/Button";
import { TextInput } from "../../assets/Styles/TextField/TextField";
import { AuthContext } from "../../store/auth-context";

const Login: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [enteredUsernameOrEmailText, setEnteredUsernameOrEmailText] =
    useState<string>();
  const [enteredPasswordText, setEnteredPasswordText] = useState<string>();
  const navigation = useNavigate();

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    authCtx.onLogin(enteredUsernameOrEmailText!, enteredPasswordText!);
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
