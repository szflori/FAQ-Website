import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import CreateAnswer from "../answer/CreateAnswer";
import "./itemQuestion.css";
import ListAnswer from "../answer/ListAnswer";
import AnswerContextProvider from "../../store/answer-context";

const ItemQuestion: React.FC<{
  answer: number;
  title: string;
  text: string;
  createDate: Date;
}> = (props) => {
  const [addAnswer, setAddAnswer] = useState<boolean>();
  

  return (
    <AnswerContextProvider>
    <div className="item-container">
      <div className="item-header">
        <div className="info-wrapper">
          <h3>{props.title}</h3>
          <span>{props.createDate.toDateString()}</span>
          <span>User</span>
        </div>
        <div className="action-wrapper">
          <button>MOD</button>
            <FiDelete />    
        </div>
      </div>
      <div className="item-body">
        <p>{props.text}</p>
      </div>
      <div className="item-footer">
        <span>{`${props.answer} answer`}</span>
      </div>
      <div className="answer-list">
        <ListAnswer />
      </div>
      {addAnswer && <CreateAnswer/>}
      <div className="answer-footer">
        <button onClick={() => setAddAnswer(!addAnswer)}>Add answer</button>
      </div>
    </div>
    </AnswerContextProvider>
  );
};

export default ItemQuestion;
