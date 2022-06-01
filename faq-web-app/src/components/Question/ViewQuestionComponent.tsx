import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerContext } from "../../store/answer-context";
import { AuthContext } from "../../store/auth-context";
import { QuestionContext } from "../../store/question-context";

import "./ViewQuestionStyle.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ModeIcon from "@mui/icons-material/Mode";
import { CategoryContext } from "../../store/category-context";
import ViewCategoryComponent from "../Category/ViewCategoryComponent";

const ViewQuestionComponent: React.FC<{
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  userID: string | undefined;
  tag: string[] | undefined;
}> = (props) => {
  const questionCtx = useContext(QuestionContext);
  const answerCtx = useContext(AnswerContext);
  const authCtx = useContext(AuthContext);
  const categoryCtx = useContext(CategoryContext);
  const [answerCount, setAnswerCount] = useState<number>();
  const [userName, setUserName] = useState<string>();
  const [modify, setModify] = useState<boolean>(false);
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
    if (authCtx.isLoggedIn) {
      if (authCtx.profile?.id === props.userID!) {
        setModify(true);
      }
    }
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
          <h3
            className="item"
            onClick={viewQuestionAnswerHandler.bind(null, props.id!)}
          >
            {props.title}
          </h3>
          {modify && (
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
          )}
        </div>
        <div className="user-info">
          <span className="username-title">{userName}</span>
        </div>

        <div className="text-section">
          <p>{props.description}</p>
        </div>
        <ul className="tag-list">
          {categoryCtx.items
            .filter((item) => props.tag?.find((element) => element === item.id))
            .map((item) => (
              <ViewCategoryComponent
                key={item.id}
                id={item.id}
                title={item.title}
                bg="dark"
              />
            ))}
        </ul>
      </div>
    </li>
  );
};

export default ViewQuestionComponent;
