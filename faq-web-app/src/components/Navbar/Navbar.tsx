import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

import "../../assets/Styles/Navbar/Navbar.css";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Signup, Login, Logout } from "../../assets/Styles/Navbar/NavStyle";
import { Avatar, Chip } from "@mui/material";

const Navbar: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigate();
  return (
    <nav className="nav-container">
      <div className="left-wrapper">
        <QuestionAnswerIcon className="logo" />
        <h2>FAQ</h2>
      </div>
      <div className="right-wrapper">
        {authCtx.isLoggedIn && (
          <div className="info-wrapper">
            <Chip
              avatar={<Avatar>{authCtx.profile?.username[0]}</Avatar>}
              label={authCtx.profile?.username}
              variant="outlined"
            />
            <Logout
              variant="outlined"
              size="small"
              onClick={() => authCtx.onLogout()}
            >
              Log out
            </Logout>
          </div>
        )}
        {!authCtx.isLoggedIn && (
          <div className="toggle-wrapper">
            {" "}
            <Login
              variant="contained"
              size="small"
              onClick={() => navigation("/login")}
            >
              Login
            </Login>
            <Signup
              variant="outlined"
              size="small"
              onClick={() => navigation("/signup")}
            >
              Sign up
            </Signup>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
