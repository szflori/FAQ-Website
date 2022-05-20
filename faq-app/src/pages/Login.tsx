import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login: React.FC = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login-header">
          <h2>Please Login</h2>
        </div>
        <div className="login-main">
          <TextField label="Email" variant="outlined" />
          <TextField label="Password" type="password" variant="outlined" />
        </div>
        <div className="login-toggle">
          <Button variant="contained">Log in</Button>
          <Button variant="outlined">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
