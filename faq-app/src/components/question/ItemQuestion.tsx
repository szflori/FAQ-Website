import React, { useContext, useState } from "react";
import { FiDelete } from "react-icons/fi";
import CreateAnswer from "../answer/CreateAnswer";
import "./itemQuestion.css";
import ListAnswer from "../answer/ListAnswer";
import AnswerContextProvider from "../../store/answer-context";

const ItemQuestion: React.FC<{title: string, date: Date, username: string, text: string}> = (props) => {
  
  const [addAnswer, setAddAnswer] = useState<boolean>();


  //TO DO usePArams add to question id and 

  return (
    <AnswerContextProvider>
      <div className="item-container">
        <div className="item-header">
          <div className="info-wrapper">
            <h3>{}</h3>
            <span>{}</span>
            <span>User</span>
          </div>
          <div className="action-wrapper">
            <button>MOD</button>
            <FiDelete />
          </div>
        </div>
        <div className="item-body">
          <p>{}</p>
        </div>
        <div className="item-footer">
          <span>{}</span>
        </div>
        <div className="answer-list">
          <ListAnswer />
        </div>
        {addAnswer && <CreateAnswer />}
        <div className="answer-footer">
          <button onClick={() => setAddAnswer(!addAnswer)}>Add answer</button>
        </div>
      </div>
    </AnswerContextProvider>
  );
};

export default ItemQuestion;
