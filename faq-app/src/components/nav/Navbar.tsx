import React, { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-contex";
import Button from "../UI/Button/Button";
import "./navbar.css";

const Navbar: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigate();

  const logoutHandler = () => {
    authCtx.onLogout();
  };

  const signupHandler = () => {
    navigation("/signup");
  };

  const login = () => {
    navigation("/login");
  };

  return (
    <nav className="nav-container">
      <div className="left-wrapper">
        <MdOutlineQuestionAnswer className="logo-icon" />
        <h3>FAQ</h3>
      </div>
      <div className="right-wrapper">
        <BiMenu className="menu-icon" />
        {authCtx.isLoggedIn && (
          <div className="account-info">
            <span>user</span>
            <Button type="outlined" onAction={logoutHandler}>Log out</Button>
          </div>
        )}
        {!authCtx.isLoggedIn && (
          <div className="nav-toggle">
            <Button type="contained" onAction={login}>Log in</Button>
            <Button type="outlined" onAction={signupHandler}>
              Sign up
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
