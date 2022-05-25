import React, { useState, useEffect } from "react";
import Question from "../models/question";

type Props = {
  children: React.ReactNode;
};

type QuestionContextObj = {
  items: Question[] | undefined;
  item: Question | undefined;
  onGetItem: (id: number) => void;
  onSave: (question: Question) => void;
  onUpdate: (id: number, question: Question) => void;
  onDelete: (id: number) => void;
};

export const QuestionContext = React.createContext<QuestionContextObj>({
  items: [],
  item: undefined,
  onGetItem: (id: number) => {},
  onSave: () => {},
  onUpdate: () => {},
  onDelete: (id: number) => {},
});

const QuestionContextProvider: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [getQuestion, setQuestion] = useState<Question>();

  useEffect(() => {
    const storedQuestionsInformation = JSON.parse(
      localStorage.getItem("questions")!
    );

    if (storedQuestionsInformation) {
      setQuestions(storedQuestionsInformation);
    }
  }, []);

  /* 
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  */

  const getQuestionHandler = (id: number) => {
    questions.filter((item) => {
      if (item.id === id) {
        setQuestion(item);
        return item;
      }
    });
  };

  const saveQuestionHandler = (question: Question) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.concat(question);
    });
    localStorage.setItem("questions", JSON.stringify(questions));
  };

  const updateQuestionHandler = (id: number, question: Question) => {
    const newList = questions.map((item) => {
      if (item.id === id) {
        return question;
      }
      return item;
    });

    setQuestions(newList);
    localStorage.setItem("questions", JSON.stringify(questions));
  };

  const deleteQuestionHandler = (id: number) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.filter((item) => item.id !== id);
    });
    localStorage.setItem("questions", JSON.stringify(questions));
  };

  const contextData: QuestionContextObj = {
    items: questions,
    item: getQuestion,
    onGetItem: getQuestionHandler,
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
