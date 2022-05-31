import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

const Navbar: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigate();
  return (
    <div>
      <h2>FAQ</h2>
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
  );
};

export default Navbar;
