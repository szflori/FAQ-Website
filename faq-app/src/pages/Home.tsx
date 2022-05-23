import React, { useState } from "react";
import ListQuestion from "../components/question/ListQuestion";
import QuestionForm from "../components/question/QuestionForm";
import Question from "../models/question";
import QuestionContextProvider from "../store/question-context";

import "./home.css";

const Home: React.FC = () => {
  const [askNew, setAskNew] = useState<boolean>();
 


  return (
    <QuestionContextProvider>
    <div className="home-container">
      <div className="header-wrapper">
        <h2>All Questions</h2>
        <button onClick={() => setAskNew(!askNew)}>Ask Question</button>
      </div>
      {askNew && <QuestionForm/>}

      <ListQuestion/>
    </div>
    </QuestionContextProvider>
  );
};

export default Home;
