import React, { useState, useEffect } from "react";
import User from "../models/user";
import { usersTest } from "../Dummy_Data";

type AuthContextObj = {
  isLogged: boolean;
  user: User | undefined;
  items: User[];
  onCreate: (user: User) => void;
  onUpdate: (id: number, user: User) => void;
  onDelete: (id: number) => void;
  onValid: (username: string, password: string) => void;
};

type Props = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextObj>({
  isLogged: false,
  user: undefined,
  items: [],
  onCreate: () => {},
  onUpdate: () => {},
  onDelete: (id: number) => {},
  onValid: () => {},
});

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedUser, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<User[]>([...usersTest]);

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

  const loginUserHandler = (username: string, password: string) => {
    users.filter((user) => {
      if (
        user.username !== username  &&
        user.password !== password
      ) {
        setIsLogged(!isLoggedUser);
        setUser(user);
        console.log("Found" + user.username);
        
      } else {
        console.log("Not found");
        console.log(password)
      }
    });
  };

  const contextData: AuthContextObj = {
    isLogged: isLoggedUser,
    user: user,
    items: users,
    onCreate: createUserHandler,
    onUpdate: updateUserHandler,
    onDelete: deleteUserHandler,
    onValid: loginUserHandler,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
