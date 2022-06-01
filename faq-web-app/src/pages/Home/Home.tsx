import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OkButton } from "../../assets/Styles/Button/Button";
import ListCategoryComponent from "../../components/Category/ListCategoryComponent";
import Navbar from "../../components/Navbar/Navbar";
import ListQuestionComponent from "../../components/Question/ListQuestionComponent";
import { AuthContext } from "../../store/auth-context";

import "./home.css";

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
      <div className="home-main">
        <div className="home-container">
          <div className="home-header">
            <h2>All Questions</h2>
            <OkButton variant="contained" size="medium" onClick={askQuestionHandler}>Ask Question</OkButton>
          </div>
          <ListCategoryComponent/>
          <ListQuestionComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
