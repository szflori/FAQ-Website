import React from "react";
import Answer from "../../models/answer";
import ItemAnswer from "./ItemAnswer";

import "./listAnswer.css";

const ListAnswer: React.FC<{ items: Answer[] }> = (props) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return (
    <div className="la-main-wrapper">
      {props.items.map((item) => (
        <ItemAnswer user="Test" createDate={today} text={item.answerBody} />
      ))}
    </div>
  );
};

export default ListAnswer;
