import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OkButton } from "../../assets/Styles/Button/Button";
import ListCategoryComponent from "../../components/Category/ListCategoryComponent";
import Navbar from "../../components/Navbar/Navbar";
import ListQuestionComponent from "../../components/Question/ListQuestionComponent";
import { useAppSelector } from "../../store/hooks";

import "./home.css";

const Home: React.FC = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);


  const navigation = useNavigate();

  const askQuestionHandler = () => {
    if (isAuth) {
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
            <OkButton
              variant="contained"
              size="medium"
              onClick={askQuestionHandler}
            >
              Ask Question
            </OkButton>
          </div>
          <ListCategoryComponent />
          <ListQuestionComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
