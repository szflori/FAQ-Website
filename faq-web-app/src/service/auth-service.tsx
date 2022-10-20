import { User } from "../models/user";

export const setProfile = (user: User) => {
  localStorage.setItem("isLoggedProfile", JSON.stringify(user));
};

export const getProfile = () => {
  return JSON.parse(localStorage.getItem("isLoggedProfile")!);
};

export const removeProfile = () => {
  localStorage.removeItem("isLoggedProfile");
};

export const isAuthentication = () => {
  return !!localStorage.getItem("isAuthenticated");
};

export const signin = () => {
  localStorage.setItem("isAuthenticated", "1");
};

export const setLogout = () => {
  localStorage.removeItem("isAuthenticated");
}

export const getUsers = () => {
  return JSON.parse(localStorage.getItem("isRegUsers")!);
};

export const setUsers = (users: User[]) => {
  localStorage.setItem("isRegUsers", JSON.stringify(users));
};
