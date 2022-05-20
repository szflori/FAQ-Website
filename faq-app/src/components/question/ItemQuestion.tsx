import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import Answer from "../../models/answer";
import ItemAnswer from "../answer/ItemAnswer";
import CreateAnswer from "../answer/CreateAnswer";
import "./itemQuestion.css";
import ListAnswer from "../answer/ListAnswer";

const ItemQuestion: React.FC<{
  answer: number;
  title: string;
  text: string;
  createDate: Date;
}> = (props) => {
  const [addAnswer, setAddAnswer] = useState<boolean>();
  const [answers, setAnswers] = useState<Answer[]>([]);

  const addAnswerHandler = (answer: Answer) => {
    setAnswers((prevAnswers) => {
      setAddAnswer(!addAnswer);
      return prevAnswers.concat(answer);
    });
  };

  return (
    <div className="item-container">
      <div className="item-header">
        <div className="info-wrapper">
          <h3>{props.title}</h3>
          <span>{props.createDate.toDateString()}</span>
          <span>User</span>
        </div>
        <div className="action-wrapper">
          <button>MOD</button>
          <button>
            <FiDelete />
          </button>
        </div>
      </div>
      <div className="item-body">
        <p>{props.text}</p>
      </div>
      <div className="item-footer">
        <span>{`${props.answer} answer`}</span>
      </div>
      <div className="answer-list">
        <ListAnswer items={answers}/>
      </div>
      {addAnswer && <CreateAnswer onAddAnswer={addAnswerHandler}/>}
      <div className="answer-footer">
        <button onClick={() => setAddAnswer(!addAnswer)}>Add answer</button>
      </div>
    </div>
  );
};

export default ItemQuestion;
