import React from "react";

import "./loginpage.css";

const LoginPage: React.FC = () => {
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
                />
              </div>
            </div>
            <button className="fill-button log">Log in</button>
          </form>
        </div>
        <div className="footer-wrappre">
          <span>
            Don't have account? <a className="signup-link">Sign up</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
