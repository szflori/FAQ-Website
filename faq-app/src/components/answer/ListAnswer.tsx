import React, { useContext } from "react";
import Answer from "../../models/answer";
import ItemAnswer from "./ItemAnswer";
import { AnswerContext } from "../../store/answer-context";

import "./listAnswer.css";

const ListAnswer: React.FC = () => {
  const answerCtx = useContext(AnswerContext);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return (
    <div className="la-main-wrapper">
      {answerCtx.items.map((item) => (
        <ItemAnswer
          user="Test"
          createDate={today}
          text={item.answerBody}
          onRemoveAnswer={answerCtx.removeItem.bind(null, item.id)}
        />
      ))}
    </div>
  );
};

export default ListAnswer;
