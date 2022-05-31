import React, { useEffect, useState } from "react";
import { User } from "../models/user";

import { USER } from "../DUMMY_DATA";

type Props = {
  children: React.ReactNode;
};

type AuthContextObj = {
  isLoggedIn: boolean;
  profile: User | undefined;
  users: User[];
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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [profile, setProfile] = useState<User>();
  const [regUsers, setRegUsers] = useState<User[]>(USER);

  useEffect(() => {
    const storedRegUsersInformation = JSON.parse(
      localStorage.getItem("regUsers")!
    );
    if (storedRegUsersInformation) {
      setRegUsers(storedRegUsersInformation);
    }

    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      const storedUserLoggedProfileInformation = JSON.parse(
        localStorage.getItem("isLoggedProfile")!
      );
      if (storedUserLoggedProfileInformation) {
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
      } else {
        console.log("error");
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
