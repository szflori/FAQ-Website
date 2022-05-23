import React, { useState, useEffect } from "react";
import User from "../models/user";

type AuthContextObj = {
  isLogged: boolean;
  items: User[];
  onCreate: (user: User) => void;
  onUpdate: (id: number, user: User) => void;
  onDelete: (id: number) => void;
};

type Props = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextObj>({
  isLogged: false,
  items: [],
  onCreate: () => {},
  onUpdate: () => {},
  onDelete: (id: number) => {},
});

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedUser, setIsLogged] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const createUserHandler = (user: User) => {
    setUsers((prevUsers) => {
      return prevUsers.concat(user);
    });
  };

  const updateUserHandler = () => {};

  const deleteUserHandler = (id: number) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  const contextData: AuthContextObj = {
    isLogged: isLoggedUser,
    items: users,
    onCreate: createUserHandler,
    onUpdate: updateUserHandler,
    onDelete: deleteUserHandler,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
