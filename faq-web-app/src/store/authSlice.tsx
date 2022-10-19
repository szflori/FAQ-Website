import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Test_User } from "../DUMMY_DATA";
import { User } from "../models/user";
import { getProfile, removeProfile, setProfile } from "../service/auth-service";
import { RootState } from "./store";

interface AuthState {
  isAuthenticated: boolean;
  profile: User | undefined;
  users: User[];
}

const initialState: AuthState = {
  isAuthenticated: false,
  profile: getProfile() || undefined,
  users: Test_User,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("isAuthenticated");
      removeProfile();
      state.isAuthenticated = false;
      state.profile = undefined;
    },

    login: (
      state,
      action: PayloadAction<{ emailOrUsername: string; password: string }>
    ) => {
      state.users.map((user) => {
        if (
          (user.username === action.payload.emailOrUsername ||
            user.email === action.payload.emailOrUsername) &&
          user.password === action.payload.password
        ) {
          localStorage.setItem("isAuthenticated", "1");
          setProfile(user);
          state.isAuthenticated = true;
          state.profile = user;
        } else {
          console.error("AUTH FAILD");
        }
      });
    },

    signup: (state, action: PayloadAction<User>) => {
      state.users.concat(action.payload);
    },
  },
});

export const { logout, login, signup } = authSlice.actions;

export const loggedProfile = (state: RootState) => state.auth.profile;

export const authReducer = authSlice.reducer;
