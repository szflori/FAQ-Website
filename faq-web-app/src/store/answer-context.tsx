import React, { useEffect, useState } from "react";
import { Answer } from "../models/answer";

import { AnswersTest } from "../DUMMY_DATA";

type Props = {
  children: React.ReactNode;
};

type AnswerContextObj = {
  items: Answer[];
  questionID: string | undefined;
  onGetQuestionID: (id: string) => void;
  onAdd: (answer: Answer) => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, answer: Answer) => void;
};

export const AnswerContext = React.createContext<AnswerContextObj>({
  items: [],
  questionID: undefined,
  onGetQuestionID: () => {},
  onAdd: () => {},
  onRemove: () => {},
  onUpdate: () => {},
});

const AnswerContextProvider: React.FC<Props> = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>(AnswersTest);
  const [questionID, setQuestionID] = useState<string>();

  useEffect(() => {
    const storedAnswersInformation = JSON.parse(
      localStorage.getItem("answers")!
    );

    if (storedAnswersInformation) {
      setAnswers(storedAnswersInformation);
    }
  }, []);

  const addAnswerHandler = (answer: Answer) => {
    const newList = answers.concat(answer);
    localStorage.setItem("answers", JSON.stringify(newList));
    setAnswers(newList);
  };

  const deleteAnswerHandler = (id: string) => {
    const newList = answers.filter((item) => item.id !== id);
    localStorage.setItem("answers", JSON.stringify(newList));
    setAnswers(newList);
  };

  const updateAnswerHandler = (id: string, answer: Answer) => {
    const newAnswerList = answers.map((item) => {
      if (item.id === id) {
        return answer;
      }
      return item;
    });
    localStorage.setItem("answers", JSON.stringify(newAnswerList));
    setAnswers(newAnswerList);
  };

  const getQuestionIDHandler = (id: string) => {
    setQuestionID(id);
  };

  const contextData: AnswerContextObj = {
    items: answers,
    questionID: questionID,
    onGetQuestionID: getQuestionIDHandler,
    onAdd: addAnswerHandler,
    onRemove: deleteAnswerHandler,
    onUpdate: updateAnswerHandler,
  };
  return (
    <AnswerContext.Provider value={contextData}>
      {children}
    </AnswerContext.Provider>
  );
};

export default AnswerContextProvider;
