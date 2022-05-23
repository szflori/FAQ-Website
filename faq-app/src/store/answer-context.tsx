import React, { useState, useEffect } from "react";
import Answer from "../models/answer";

type AnswerContextObj = {
  items: Answer[];
  addItem: (answer: Answer) => void;
  removeItem: (id: number) => void;
};

type Props = {
    children: JSX.Element,
  };

export const AnswerContext = React.createContext<AnswerContextObj>({
  items: [],
  addItem: () => {},
  removeItem: (id: number) => {},
});


  
const AnswerContextProvider: React.FC<Props> = ({children}) => {
  const [answers, setAnswers] = useState<Answer[]>(JSON.parse(localStorage.getItem('answers')!));

  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);


  const addAnswerHandler = (answer: Answer) => {
    setAnswers((prevAnswers) => {
      return prevAnswers.concat(answer);
    });
  };

  const removeAnswerHandler = (id: number) => {
    setAnswers((prevAnswers) => {
      return prevAnswers.filter((answer) => answer.id !== id);
    });
  };

  const contextValue: AnswerContextObj = {
    items: answers,
    addItem: addAnswerHandler,
    removeItem: removeAnswerHandler,
  };

  return (
    <AnswerContext.Provider value={contextValue}>
      {children}
    </AnswerContext.Provider>
  );
};

export default AnswerContextProvider;
