import React, { useState, useContext, useEffect } from "react";
import ItemQuestion from "../../components/question/ItemQuestion";
import { QuestionContext } from "../../store/question-context";
import { useParams } from "react-router-dom";
import Card from "../../components/UI/Card/Card";

const ListAnswer: React.FC = () => {
  const questionCtx = useContext(QuestionContext);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const { id } = useParams();

  useEffect(() => {
    const numID = parseFloat(id!);
    console.log(numID);
    if (numID) {
      questionCtx.onGetItem(numID);
      console.log(questionCtx.item);
    }
  }, []);

  // TO DO SEARCH QUEST ID

  return (
    <Card size="">
      <ItemQuestion
        title={questionCtx.item!.questionTitle}
        date={today}
        username={questionCtx.item!.user.username}
        text={questionCtx.item!.questionBody}
      />
    </Card>
  );
};

export default ListAnswer;
