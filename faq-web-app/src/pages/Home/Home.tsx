import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import ListQuestionComponent from "../../components/Question/ListQuestionComponent";
import { AuthContext } from "../../store/auth-context";

const Home: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigate();

  const askQuestionHandler = () => {
    if (authCtx.isLoggedIn) {
      navigation("/item/_new");
    } else {
      navigation("/login");
    }
  };
  return (
    <div>
      <Navbar />
      <button onClick={askQuestionHandler}>Ask Question</button>
      <ListQuestionComponent />
    </div>
  );
};

export default Home;
