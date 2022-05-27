import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import TextField from "../../components/UI/TextField/TextField";
import User from "../../models/user";
import { AuthContext } from "../../store/auth-contex";
import "./signup.css";

const SignupPage: React.FC = (props) => {
  const userCtx = useContext(AuthContext);
  const usernameTextHandlerRef = useRef<HTMLInputElement>(null);
  const emailTextHandlerRef = useRef<HTMLInputElement>(null);
  const passwordTextHandlerRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const submitUserHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredUserName = usernameTextHandlerRef.current!.value;
    const enteredEmail = emailTextHandlerRef.current!.value;
    const enteredPassword = passwordTextHandlerRef.current!.value;
    const user = new User(enteredUserName, enteredEmail, enteredPassword);

    userCtx.onSignup(user);
    navigate("/login");
  };

  return (
    <div className="singup-index">
      <div className="singup-container">
        <div className="header-wrapper">
          <h2>Create Account</h2>
        </div>

        <form className="form-item">
          <TextField
            onLabel="Username"
            onType="text"
            onInputText="Username"
            onRef={usernameTextHandlerRef}
          />
          <TextField
            onLabel="Email"
            onType="text"
            onInputText="Email"
            onRef={emailTextHandlerRef}
          />
          <TextField
            onLabel="Password"
            onType="password"
            onInputText="Password"
            onRef={passwordTextHandlerRef}
          />
          <div className="info-wrapper">
            <input type="checkbox" />{" "}
            <span>
              I accept the <a className="link">Terms of Use</a> &{" "}
              <a className="link">Provacy Policy</a>.
            </span>
          </div>
          <Button type="contained" onAction={submitUserHandler}>
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
