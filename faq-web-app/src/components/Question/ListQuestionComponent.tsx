import React, { useContext } from "react";
import ViewQuestionComponent from "./ViewQuestionComponent";

import "./ListQuestionStyle.css";
import { useAppSelector } from "../../store/hooks";

const ListQuestionComponent: React.FC = () => {
  const questions = useAppSelector((state) => state.question.items);
  const tag = useAppSelector((state) => state.category.tag);
  return (
    <ul className="list-wrapper">
      {questions
        .filter((item) =>
          item.tag.find((element) => element === tag?.id)
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
