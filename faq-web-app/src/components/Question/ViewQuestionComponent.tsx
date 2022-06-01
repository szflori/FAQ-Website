import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerContext } from "../../store/answer-context";
import { AuthContext } from "../../store/auth-context";
import { QuestionContext } from "../../store/question-context";

import "./ViewQuestionStyle.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ModeIcon from "@mui/icons-material/Mode";

const ViewQuestionComponent: React.FC<{
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  userID: string | undefined;
}> = (props) => {
  const questionCtx = useContext(QuestionContext);
  const answerCtx = useContext(AnswerContext);
  const authCtx = useContext(AuthContext);
  const [answerCount, setAnswerCount] = useState<number>();
  const [userName, setUserName] = useState<string>();
  const navigation = useNavigate();

  useEffect(() => {
    setAnswerCount(
      answerCtx.items.filter((item) => item.questionID === props.id).length
    );
    authCtx.users.find((user) => {
      if (user.id === props.userID) {
        setUserName(user.username);
      } else {
      }
    });
  }, [answerCount, userName]);

  const deleteQuestionHandler = (id: string) => {
    questionCtx.onRemove(id);
  };

  const modifyQuestionHandler = (id: string) => {
    navigation(`/item/${id}`);
  };

  const viewQuestionAnswerHandler = (id: string) => {
    navigation(`/item_list/${id}`);
  };

  return (
    <li className="question-container">
      <div className="q-info-wrapper">
        <span>{answerCount}</span>
        answer
      </div>
      <div className="q-main-wrapper">
        <div className="q-operation-section">
          <h3 onClick={viewQuestionAnswerHandler.bind(null, props.id!)}>
            {props.title}
          </h3>
          <div className="q-toggle-wrapper">
            {" "}
            <ModeIcon
              fontSize="small"
              onClick={modifyQuestionHandler.bind(null, props.id!)}
            >
              Modify
            </ModeIcon>
            <BackspaceIcon
              fontSize="small"
              onClick={deleteQuestionHandler.bind(null, props.id!)}
            >
              Delete
            </BackspaceIcon>
          </div>
        </div>

        <span>{userName}</span>
        <div className="text-section">
          <p>{props.description}</p>
        </div>
      </div>
    </li>
  );
};

export default ViewQuestionComponent;
