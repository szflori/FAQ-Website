import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    authCtx.onValid(enteredUserName, enteredPassword);

    if (authCtx.isLogged) {
      navigate("/home");
    } else {
      console.log("Error");
    }
  };
  return (
    <div className="login-index">
      <div className="login-container">
        <div className="log-header-wrapper">
          <h2>Please Log in</h2>
        </div>
        <div className="log-main-wrapper">
          <form className="form-wrapper">
            <div className="form-group">
              <label>Username or Email</label>
              <div className="textfield">
                <input
                  type="text"
                  placeholder="Username or email"
                  className="input-control"
                  ref={usernameTextHandlerRef}
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
            <button onClick={loginHandler} className="fill-button log">Log in</button>
          </form>
        </div>
        <div className="footer-wrappre">
          <span>
            Don't have account?{" "}
            <Link to="/singup" className="signup-link">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
