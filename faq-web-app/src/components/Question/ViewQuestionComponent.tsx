import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerContext } from "../../store/answer-context";
import { AuthContext } from "../../store/auth-context";
import { QuestionContext } from "../../store/question-context";

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
    <li>
      <h3 onClick={viewQuestionAnswerHandler.bind(null, props.id!)}>
        {props.title}
      </h3>
      <span>{userName}</span>
      <p>{props.description}</p>
      {answerCount}
      <button onClick={deleteQuestionHandler.bind(null, props.id!)}>
        Delete
      </button>
      <button onClick={modifyQuestionHandler.bind(null, props.id!)}>
        Modify
      </button>
    </li>
  );
};

export default ViewQuestionComponent;
