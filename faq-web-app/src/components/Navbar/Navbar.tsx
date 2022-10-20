import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Avatar, Chip } from "@mui/material";
import {
  CancelButton,
  OkButton,
  SignupButton,
} from "../../assets/Styles/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loggedProfile, logout } from "../../store/reducers/auth-slice";

const Navbar: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const profile = useAppSelector(loggedProfile);
  const dispatch = useAppDispatch();
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
        {isAuth && (
          <div className="info-wrapper">
            <Chip
              sx={{
                color: "white",
                border: "0.2px solid #00ff80",
              }}
              avatar={<Avatar>{profile && profile.username[0]}</Avatar>}
              label={profile && profile.username}
              variant="outlined"
            />
            <CancelButton
              variant="outlined"
              size="small"
              onClick={() => dispatch(logout())}
            >
              Log out
            </CancelButton>
          </div>
        )}
        {!isAuth && (
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
