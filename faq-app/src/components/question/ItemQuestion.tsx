import React from "react";

const ItemQuestion: React.FC<{
  answer: number;
  title: string;
  text: string;
  createDate: Date;
}> = (props) => {
  return (
    <div>
      <div className="item-header">
        <h4>{props.title}</h4>
        <button>Ask Question</button>
        <span>{props.createDate.toDateString()}</span>
      </div>
      <div className="item-body">
        <p>{props.text}</p>
      </div>
      <div className="item-footer">
        <span>{`${props.answer} answer`}</span>
      </div>
      <div className="answer-list"></div>
    </div>
  );
};

export default ItemQuestion;
