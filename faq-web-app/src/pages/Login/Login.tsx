import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

const Login: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [enteredUsernameOrEmailText, setEnteredUsernameOrEmailText] =
    useState<string>();
  const [enteredPasswordText, setEnteredPasswordText] = useState<string>();
  const navigation = useNavigate();

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    authCtx.onLogin(enteredUsernameOrEmailText!, enteredPasswordText!);
    navigation("/");
  };
  return (
    <div>
      <form>
        <label>Username or Email</label>
        <input
          type="text"
          placeholder="Username or Email"
          value={enteredUsernameOrEmailText}
          onChange={(e) => setEnteredUsernameOrEmailText(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={enteredPasswordText}
          onChange={(e) => setEnteredPasswordText(e.target.value)}
        />
        <button onClick={loginHandler}>Login</button>
      </form>
    </div>
  );
};

export default Login;
