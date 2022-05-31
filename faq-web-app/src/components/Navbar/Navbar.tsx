import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

import "../../assets/Styles/Navbar/Navbar.css";

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
          <div>
            <span>{authCtx.profile?.username}</span>{" "}
            <button onClick={() => authCtx.onLogout()}>Log out</button>
          </div>
        )}
        {!authCtx.isLoggedIn && (
          <div>
            {" "}
            <button onClick={() => navigation("/login")}>Login</button>
            <button onClick={() => navigation("/signup")}>Sign up</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
