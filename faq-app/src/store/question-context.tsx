import React, { useState } from "react";
import Question from "../models/question";

type QuestionContextObj = {
  items: Question[];
  onCreate: (question: Question) => void;
  onUpdate: (id: number, question: Question) => void;
  onDelete: (id: number) => void;
};

type Props = {
  children: React.ReactNode;
};

export const QuestionContext = React.createContext<QuestionContextObj>({
  items: [],
  onCreate: () => {},
  onUpdate: (id: number) => {},
  onDelete: (id: number) => {},
});

const QuestionContextProvider: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestionHandler = (question: Question) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.concat(question);
    });
  };

  const updateQuestionHandler = (id: number, question: Question) => {
    const newList = questions.map((item) => {
      if (item.id === id) {
        return question;
      }
      return item;
    });
    setQuestions(newList);
  };

  const removeQuestionHandler = (id: number) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.filter((question) => question.id !== id);
    });
  };

  const contextQValue: QuestionContextObj = {
    items: questions,
    onCreate: addQuestionHandler,
    onUpdate: updateQuestionHandler,
    onDelete: removeQuestionHandler,
  };
  return (
    <QuestionContext.Provider value={contextQValue}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
