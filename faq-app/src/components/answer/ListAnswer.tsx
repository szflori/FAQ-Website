import React, { useContext, useEffect, useState } from "react";
import Answer from "../../models/answer";
import ItemAnswer from "./ItemAnswer";
import { AnswerContext } from "../../store/answer-context";

import "./listAnswer.css";

const ListAnswer: React.FC<{ questID: number }> = (props) => {
  const answerCtx = useContext(AnswerContext);
  const [qAnswers, setQAnswers] = useState<Answer[]>([]);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  useEffect(() => {
    setQAnswers(
      answerCtx.items.filter((item) => {
        return item.question.id === props.questID;
      })
    );
  }, [qAnswers]);
  return (
    <div className="la-main-wrapper">
      {qAnswers.map((item) => (
        <ItemAnswer
          key={item.question.id}
          user={item.user.username}
          createDate={today}
          text={item.answerBody}
          onRemoveAnswer={answerCtx.onDelete.bind(null, item.id)}
        />
      ))}
    </div>
  );
};

export default ListAnswer;
