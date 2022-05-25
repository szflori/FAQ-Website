import React, { useContext, useState } from "react";
import { FiDelete } from "react-icons/fi";
import CreateAnswer from "../answer/CreateAnswer";
import "./itemQuestion.css";
import ListAnswer from "../answer/ListAnswer";
import AnswerContextProvider from "../../store/answer-context";
import Button from "../UI/Button/Button";

const ItemQuestion: React.FC<{title: string, date: Date, username: string, text: string}> = (props) => {
  
  const [addAnswer, setAddAnswer] = useState<boolean>();


  return (
    <AnswerContextProvider>
      <div className="item-container">
        <div className="item-header">
          <div className="info-wrapper">
            <h3>{props.title}</h3>
            <span>{props.date.toISOString()}</span>
            <span>{props.username}</span>
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
          <span>{}</span>
        </div>
        <div className="answer-list">
          <ListAnswer />
        </div>
        {addAnswer && <CreateAnswer />}
        <div className="answer-footer">
          <Button type="outlined" onAction={() => setAddAnswer(!addAnswer)}>Add answer</Button>
        </div>
      </div>
    </AnswerContextProvider>
  );
};

export default ItemQuestion;
