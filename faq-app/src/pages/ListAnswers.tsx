import React from "react";
import ItemQuestion from "../components/question/ItemQuestion";


const ListAnswer: React.FC = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return (
    <div>
      <ItemQuestion answer={4} title="How?" text="What is lorem ipsum" createDate={today}/>
    </div>
  );
};

export default ListAnswer;
