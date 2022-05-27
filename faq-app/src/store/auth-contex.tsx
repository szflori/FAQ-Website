import React, { useEffect, useState } from "react";
import User from "../models/user";

type Props = {
  children: React.ReactNode;
};

type AuthContextObj = {
  isLoggedIn: boolean | undefined;
  profile: User | undefined;
  users: User[] | undefined;
  onLogout: () => void;
  onLogin: (emailOrUsername: string, password: string) => void;
  onSignup: (user: User) => void;
};

export const AuthContext = React.createContext<AuthContextObj>({
  isLoggedIn: false,
  profile: undefined,
  users: [],
  onLogout: () => {},
  onLogin: (emailOrUsername: string, password: string) => {},
  onSignup: () => {},
});

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [profile, setProfile] = useState<User>();
  const [regUsers, setRegUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedRegUsersInformation = JSON.parse(
      localStorage.getItem("regUsers")!
    );
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedRegUsersInformation) {
      setRegUsers(storedRegUsersInformation);
    }
    if (storedUserLoggedInInformation === "1") {
      const storedUserLoggedProfileInformation = JSON.parse(
        localStorage.getItem("isLoggedProfile")!
      );
      if (storedUserLoggedInInformation) {
        setProfile(storedUserLoggedProfileInformation);
      }
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isLoggedProfile");
    setIsLoggedIn(false);
    setProfile(undefined);
  };

  const loginHandler = (emailOrUsername: string, password: string) => {
    regUsers.map((user) => {
      if (
        (user.username === emailOrUsername || user.email === emailOrUsername) &&
        user.password === password
      ) {
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("isLoggedProfile", JSON.stringify(user));
        setIsLoggedIn(true);
        setProfile(user);
      }
    });
  };

  const signupHandler = (user: User) => {
    const newUsers = regUsers.concat(user);
    localStorage.setItem("regUsers", JSON.stringify(newUsers));
    setRegUsers(newUsers);
  };

  const contextData: AuthContextObj = {
    isLoggedIn: isLoggedIn,
    profile: profile,
    users: regUsers,
    onLogout: logoutHandler,
    onLogin: loginHandler,
    onSignup: signupHandler,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
