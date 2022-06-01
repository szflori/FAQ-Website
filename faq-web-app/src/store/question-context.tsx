import React, { useEffect, useState } from "react";
import { Question } from "../models/question";

import { Test_Question } from "../DUMMY_DATA";

type Props = {
  children: React.ReactNode;
};

type QuestionContextObj = {
  items: Question[];
  onAdd: (question: Question) => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, question: Question) => void;
};

export const QuestionContext = React.createContext<QuestionContextObj>({
  items: [],
  onAdd: () => {},
  onRemove: (id: string) => {},
  onUpdate: () => {},
});

const QuestionContextProvider: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>(Test_Question);

  useEffect(() => {
    const storedQuestionsInformation = JSON.parse(
      localStorage.getItem("questions")!
    );

    if (storedQuestionsInformation) {
      setQuestions(storedQuestionsInformation);
    }
  }, []);

  const addQuestionHandler = (question: Question) => {
    const newList = questions.concat(question);
    localStorage.setItem("questions", JSON.stringify(newList));
    setQuestions(newList);
  };

  const deleteQuestionHandler = (id: string) => {
    const newList = questions.filter((item) => item.id !== id);
    localStorage.setItem("questions", JSON.stringify(newList));
    setQuestions(newList);
  };

  const updateQuestionHandler = (id: string, question: Question) => {
    const newQuestionList = questions.map((item) => {
      if (item.id === id) {
        return question;
      }
      return item;
    });
    localStorage.setItem("questions", JSON.stringify(newQuestionList));
    setQuestions(newQuestionList);
  };

  const contextData: QuestionContextObj = {
    items: questions,
    onAdd: addQuestionHandler,
    onRemove: deleteQuestionHandler,
    onUpdate: updateQuestionHandler,
  };
  return (
    <QuestionContext.Provider value={contextData}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
