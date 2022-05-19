import React from "react";
import Answer from "../answer/Answer";

const QuestItem: React.FC<{answer: number, title: string, text: string, createDate: Date, }> = (props) => {
  return (
    <div>
      <div className="item-header">
        <h4>{props.title}</h4>
        <button>Ask Question</button>
        <span>{props.createDate.toDateString()}</span>
      </div>
      <div className="item-body">
        <p>
          {props.text}
        </p>
      </div>
      <div className="item-footer">
          <span>{`${props.answer} answer`}</span>
      </div>
      <div className="answer-list">
          <Answer/>
      </div>
    </div>
  );
};

export default QuestItem;
