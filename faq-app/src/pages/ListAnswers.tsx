import React, { useState, useContext, useEffect } from "react";
import ItemQuestion from "../components/question/ItemQuestion";
import { QuestionContext } from "../store/question-context";
import { useParams } from "react-router-dom";
import Question from "../models/question";

const ListAnswer: React.FC = () => {
  const [quest, SetQuest] = useState<Question>();
  const questionCtx = useContext(QuestionContext);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const { id } = useParams();

// TO DO SEARCH QUEST ID

  return (
    <div>
      <ItemQuestion title="" date={today} username={} text={} />
    </div>
  );
};

export default ListAnswer;
