import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

import "./Navbar.css";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Avatar, Chip } from "@mui/material";
import {
  CancelButton,
  OkButton,
  SignupButton,
} from "../../assets/Styles/Button/Button";

const Navbar: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigate();

  const navLinkStyles = {
    textDecoration: "none",
    color: "white",
    display: "flex",
  };

  return (
    <nav className="nav-container">
      <div className="left-wrapper">
        <Link to="/" style={navLinkStyles}>
          <QuestionAnswerIcon className="logo" />
          <h2>FAQ</h2>
        </Link>
      </div>
      <div className="right-wrapper">
        {authCtx.isLoggedIn && (
          <div className="info-wrapper">
            <Chip
              sx={{
                color: "white",
                border: "0.2px solid #00ff80",
              }}
              avatar={<Avatar>{authCtx.profile?.username[0]}</Avatar>}
              label={authCtx.profile?.username}
              variant="outlined"
            />
            <CancelButton
              variant="outlined"
              size="small"
              onClick={() => authCtx.onLogout()}
            >
              Log out
            </CancelButton>
          </div>
        )}
        {!authCtx.isLoggedIn && (
          <div className="toggle-wrapper">
            {" "}
            <OkButton
              variant="contained"
              size="small"
              onClick={() => navigation("/login")}
            >
              Login
            </OkButton>
            <SignupButton
              variant="outlined"
              size="small"
              onClick={() => navigation("/signup")}
            >
              Sign up
            </SignupButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
