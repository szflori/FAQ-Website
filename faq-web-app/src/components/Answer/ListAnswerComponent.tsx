import React, { useContext } from "react";
import { Answer } from "../../models/answer";
import { AnswerContext } from "../../store/answer-context";
import ViewAnswerComponent from "./ViewAnswerComponent";

const ListAnswerComponent: React.FC<{ questionID: string | undefined }> = (
  props
) => {
  const answerCtx = useContext(AnswerContext);
  return (
    <ul>
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
