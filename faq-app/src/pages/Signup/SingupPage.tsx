import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/user";
import { AuthContext } from "../../store/auth-contex";
import "./singup.css";

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

    userCtx.onCreate(user);
    navigate("/login");
  };

  return (
    <div className="singup-index">
      <div className="singup-container">
        <div className="header-wrapper">
          <h2>Create Account</h2>
        </div>

        <form className="form-item" onSubmit={submitUserHandler}>
          <div className="form-group">
            <label>Username</label>
            <div className="textfield">
              <input
                type="text"
                placeholder="Username"
                className="input-control"
                ref={usernameTextHandlerRef}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <div className="textfield">
              <input
                type="text"
                placeholder="Email"
                className="input-control"
                ref={emailTextHandlerRef}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="textfield">
              <input
                type="password"
                placeholder="Password"
                className="input-control"
                ref={passwordTextHandlerRef}
              />
            </div>
          </div>
          <div className="info-wrapper">
            <input type="checkbox" />{" "}
            <span>
              I accept the <a className="link">Terms of Use</a> &{" "}
              <a className="link">Provacy Policy</a>.
            </span>
          </div>
          <button type="submit" className="fill-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
