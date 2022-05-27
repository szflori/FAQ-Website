import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import TextField from "../../components/UI/TextField/TextField";
import { AuthContext } from "../../store/auth-contex";
import "./loginpage.css";

const LoginPage: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const usernameTextHandlerRef = useRef<HTMLInputElement>(null);
  const passwordTextHandlerRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredUserName = usernameTextHandlerRef.current!.value;
    const enteredPassword = passwordTextHandlerRef.current!.value;

    authCtx.onLogin(enteredUserName, enteredPassword);
    navigate("/home");
  };
  return (
    <div className="login-index">
      <div className="login-container">
        <div className="log-header-wrapper">
          <h2>Please Log in</h2>
        </div>
        <div className="log-main-wrapper">
          <form className="form-wrapper">
            <TextField
              onLabel="Username or Email"
              onType="text"
              onInputText="Username or Email"
              onRef={usernameTextHandlerRef}
            />
            <TextField
              onLabel="Password"
              onType="password"
              onInputText="Password"
              onRef={passwordTextHandlerRef}
            />

            <Button type="contained" onAction={loginHandler}>
              Log in
            </Button>
          </form>
        </div>
        <div className="footer-wrappre">
          <span>
            Don't have account?{" "}
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
