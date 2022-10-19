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
