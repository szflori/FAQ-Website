import React from "react";
import QuestItem from "../components/question/QuestItem";

const List: React.FC = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return (
    <div>
      <QuestItem
        answer={4}
        title="What is Lorem Ipsum?"
        createDate={today}
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  );
};

export default List;
