import React from "react";
import { FiDelete } from "react-icons/fi";
import "./ItemAnswer.css";

const ItemAnswer: React.FC<{
  user: string;
  createDate: Date;
  text: string;
  onRemoveAnswer: () => void;
}> = (props) => {
  return (
    <div className="answer-container">
      <div className="answer-header">
        <div className="answer-info">
          <h3>{props.user}</h3>
          <span>{props.createDate.toDateString()}</span>
        </div>
        <div className="action-toggle">
          <button>MOD</button>
          <FiDelete onClick={props.onRemoveAnswer} />
        </div>
      </div>
      <div className="answer-main">
        <p>{props.text}</p>
      </div>
      <div className="answer-footer">
        <button>Like</button>
        <button>Dislike</button>
      </div>
    </div>
  );
};

export default ItemAnswer;
