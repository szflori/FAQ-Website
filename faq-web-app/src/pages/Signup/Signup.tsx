import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../models/user";
import { AuthContext } from "../../store/auth-context";

const Signup: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [enteredUsernameText, setEnteredUsernameText] = useState<string>();
  const [enteredEmailText, setEnteredEmailText] = useState<string>();
  const [enteredPasswordText, setEnteredPasswordText] = useState<string>();
  const navigation = useNavigate();

  const signupHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const user: User = {
      id: Math.round(Math.floor(Math.random() * 100)).toString(),
      username: enteredUsernameText!,
      email: enteredEmailText!,
      password: enteredPasswordText!,
    };
    authCtx.onSignup(user);
    navigation("/login");
  };
  return (
    <div>
      <form>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={enteredUsernameText}
          onChange={(e) => setEnteredUsernameText(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={enteredEmailText}
          onChange={(e) => setEnteredEmailText(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={enteredPasswordText}
          onChange={(e) => setEnteredPasswordText(e.target.value)}
        />
        <button onClick={signupHandler}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
