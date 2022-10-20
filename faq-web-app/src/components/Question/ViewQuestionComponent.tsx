import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewQuestionStyle.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ModeIcon from "@mui/icons-material/Mode";
import ViewCategoryComponent from "../Category/ViewCategoryComponent";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loggedProfile } from "../../store/reducers/auth-slice";
import { deleteQuestion } from "../../store/reducers/question-slice";

const ViewQuestionComponent: React.FC<{
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  userID: string | undefined;
  tag: string[] | undefined;
}> = (props) => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const users = useAppSelector((state) => state.auth.users);
  const answers = useAppSelector((state) => state.answer.items);
  const categories = useAppSelector((state) => state.category.items);
  const profile = useAppSelector(loggedProfile);
  const dispatch = useAppDispatch();
  const [answerCount, setAnswerCount] = useState<number>();
  const [userName, setUserName] = useState<string>();
  const [modify, setModify] = useState<boolean>(false);
  const navigation = useNavigate();

  useEffect(() => {
    setAnswerCount(
      answers.filter((item) => item.questionID === props.id).length
    );
    users.find((user) => {
      if (user.id === props.userID) {
        setUserName(user.username);
      } else {
      }
    });
    if (isAuth) {
      if (profile?.id === props.userID!) {
        setModify(true);
      }
    }
  }, [answerCount, userName]);

  const deleteQuestionHandler = (id: string) => {
    dispatch(deleteQuestion({ id }));
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
          {categories
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
