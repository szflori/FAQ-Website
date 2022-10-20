import React, { useContext } from "react";
import ViewAnswerComponent from "./ViewAnswerComponent";

import "./ListAnswerStyle.css";
import { useAppSelector } from "../../store/hooks";

const ListAnswerComponent: React.FC<{ questionID: string | undefined }> = (
  props
) => {
  const answers = useAppSelector((state) => state.answer.items);
  return (
    <ul className="list-wrapper">
      {answers
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
