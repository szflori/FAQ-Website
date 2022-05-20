import React, { useState } from "react";
import ListQuestion from "../components/question/ListQuestion";
import QuestionForm from "../components/question/QuestionForm";
import Question from "../models/question";

import "./home.css";

const Home: React.FC = () => {
  const [askNew, setAskNew] = useState<boolean>();
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestionHandler = (question: Question) => {
    setQuestions((prevQuestions) => {
      setAskNew(!askNew);
      return prevQuestions.concat(question);
    });
  };
  return (
    <div className="home-container">
      <div className="header-wrapper">
        <h2>All Questions</h2>
        <button onClick={() => setAskNew(!askNew)}>Ask Question</button>
      </div>
      {askNew && <QuestionForm onAddQuestion={addQuestionHandler} />}

      <ListQuestion items={questions} />
    </div>
  );
};

export default Home;
