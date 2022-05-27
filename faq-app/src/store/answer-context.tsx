import React, { useState, useEffect } from "react";
import Answer from "../models/answer";
import Question from "../models/question";

type Props = {
  children: React.ReactNode;
};

type AnswerContextObj = {
  items: Answer[];
  onSave: (answer: Answer) => void;
  onUpdate: (id: number, answer: Answer) => void;
  onDelete: (id: number) => void;
};

export const AnswerContext = React.createContext<AnswerContextObj>({
  items: [],
  onSave: () => {},
  onUpdate: () => {},
  onDelete: (id: number) => {},
});

const AnswerContextProvider: React.FC<Props> = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    const storedAnswersInformation = JSON.parse(
      localStorage.getItem("answers")!
    );
    if (storedAnswersInformation) {
      setAnswers(storedAnswersInformation);
    }
  }, []);


  const saveAnswerHandler = (answer: Answer) => {
    const newAnswers = answers.concat(answer);
    localStorage.setItem("answers", JSON.stringify(newAnswers));
    setAnswers(newAnswers);
  };

  const updateAnswerHandler = (id: number, answer: Answer) => {
    const newList = answers.map((item) => {
      if (item.id === id) {
        return answer;
      }
      return item;
    });

    setAnswers(newList);
    localStorage.setItem("answers", JSON.stringify(answers));
  };

  const deleteAnswerHandler = (id: number) => {
    setAnswers((prevAnswers) => {
      return prevAnswers.filter((item) => item.id !== id);
    });

    localStorage.setItem("answers", JSON.stringify(answers));
  };

  const contextData: AnswerContextObj = {
    items: answers,
    onSave: saveAnswerHandler,
    onUpdate: updateAnswerHandler,
    onDelete: deleteAnswerHandler,
  };

  return (
    <AnswerContext.Provider value={contextData}>
      {children}
    </AnswerContext.Provider>
  );
};

export default AnswerContextProvider;
