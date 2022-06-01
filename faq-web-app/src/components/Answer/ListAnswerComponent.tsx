import React, { useContext } from "react";
import { AnswerContext } from "../../store/answer-context";
import ViewAnswerComponent from "./ViewAnswerComponent";

import "./ListAnswerStyle.css";

const ListAnswerComponent: React.FC<{ questionID: string | undefined }> = (
  props
) => {
  const answerCtx = useContext(AnswerContext);
  return (
    <ul className="list-wrapper">
      {answerCtx.items
        .filter((item) => item.questionID === props.questionID)
        .map((filteredItem) => (
          <ViewAnswerComponent
            key={filteredItem.id}
            id={filteredItem.id}
            text={filteredItem.text}
            userID={filteredItem.userID}
          />
        ))}
    </ul>
  );
};

export default ListAnswerComponent;
