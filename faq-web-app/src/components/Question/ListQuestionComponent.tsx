import React, { useContext } from "react";
import { QuestionContext } from "../../store/question-context";
import ViewQuestionComponent from "./ViewQuestionComponent";

import "./ListQuestionStyle.css";
import { CategoryContext } from "../../store/category-context";

const ListQuestionComponent: React.FC = () => {
  const questionCtx = useContext(QuestionContext);
  const categoryCtx = useContext(CategoryContext);
  return (
    <ul className="list-wrapper">
      {questionCtx.items
        .filter((item) =>
          item.tag.find((element) => element === categoryCtx.tag?.id)
        )
        .map((filteredItem) => (
          <ViewQuestionComponent
            key={filteredItem.id}
            id={filteredItem.id}
            title={filteredItem.title}
            description={filteredItem.description}
            userID={filteredItem.userID}
            tag={filteredItem.tag}
          />
        ))}
    </ul>
  );
};

export default ListQuestionComponent;
