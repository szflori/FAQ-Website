import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import ListAnswers from "./pages/ListAnswers";
import LoginPage from "./pages/Login/LoginPage";
import SingupPage from "./pages/Signup/SingupPage";
import AuthContextProvider from "./store/auth-contex";

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SingupPage />} />
            <Route path="/quest/:id" element={<ListAnswers />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
