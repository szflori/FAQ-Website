import React, { useContext } from "react";
import { QuestionContext } from "../../store/question-context";
import ViewQuestionComponent from "./ViewQuestionComponent";

const ListQuestionComponent: React.FC = () => {
  const questionCtx = useContext(QuestionContext);
  return (
    <ul>
      {questionCtx.items.map((item) => (
        <ViewQuestionComponent
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          userID={item.userID}
        />
      ))}
    </ul>
  );
};

export default ListQuestionComponent;
