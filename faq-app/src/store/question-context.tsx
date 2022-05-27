import React, { useState, useEffect } from "react";
import Question from "../models/question";

type Props = {
  children: React.ReactNode;
};

type QuestionContextObj = {
  items: Question[];
  onSave: (question: Question) => void;
  onUpdate: (id: number, question: Question) => void;
  onDelete: (id: number) => void;
};

export const QuestionContext = React.createContext<QuestionContextObj>({
  items: [],
  onSave: () => {},
  onUpdate: () => {},
  onDelete: (id: number) => {},
});

const QuestionContextProvider: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const storedQuestionListInformation = JSON.parse(
      localStorage.getItem("questions")!
    );

    if (storedQuestionListInformation) {
      setQuestions(storedQuestionListInformation);
    }
  }, []);


  const saveQuestionHandler = (question: Question) => {
    const newQuestions = questions.concat(question);
    localStorage.setItem("questions", JSON.stringify(newQuestions));
    setQuestions(newQuestions);
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

  const deleteQuestionHandler = (id: number) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.filter((item) => item.id !== id);
    });
  };

  const contextData: QuestionContextObj = {
    items: questions,
    onSave: saveQuestionHandler,
    onUpdate: updateQuestionHandler,
    onDelete: deleteQuestionHandler,
  };

  return (
    <QuestionContext.Provider value={contextData}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
