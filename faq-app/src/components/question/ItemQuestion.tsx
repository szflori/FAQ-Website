import React, { useContext, useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { AnswerContext } from "../../store/answer-context";
import { QuestionContext } from "../../store/question-context";
import CreateAnswer from "../answer/CreateAnswer";
import "./itemQuestion.css";
import ListAnswer from "../answer/ListAnswer";
import Button from "../UI/Button/Button";
import { Backdrop } from "@mui/material";
import Question from "../../models/question";

const ItemQuestion: React.FC<{ id: number; date: Date }> = (props) => {
  const questCtx = useContext(QuestionContext);
  const [addAnswer, setAddAnswer] = useState<boolean>(false);
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    setQuestion(
      questCtx.items.find((element) => {
        return element.id === props.id;
      })
    );
  }, [question]);
  return (
    <>
      <div className="item-container">
        <div className="item-header">
          <div className="info-wrapper">
            <h3>{question?.questionTitle}</h3>
            <span>{props.date.toISOString()}</span>
            <span>{question?.user.username}</span>
          </div>
          <div className="action-wrapper">
            <button>MOD</button>
            <FiDelete />
          </div>
        </div>
        <div className="item-body">
          <p>{question?.questionBody}</p>
        </div>
        <div className="item-footer">
          <span>{}</span>
        </div>
        <div className="answer-list">
          <ListAnswer questID={props.id} />
        </div>
        <Backdrop open={addAnswer}>
          <CreateAnswer
            onQuestion={question!}
            onShow={() => setAddAnswer(!addAnswer)}
          />
        </Backdrop>
        <div className="answer-footer">
          <Button type="outlined" onAction={() => setAddAnswer(!addAnswer)}>
            Add answer
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemQuestion;
