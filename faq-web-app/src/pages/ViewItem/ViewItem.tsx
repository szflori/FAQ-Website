import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OkButton } from "../../assets/Styles/Button/Button";
import ListAnswerComponent from "../../components/Answer/ListAnswerComponent";
import Navbar from "../../components/Navbar/Navbar";
import ViewQuestionComponent from "../../components/Question/ViewQuestionComponent";
import { Question } from "../../models/question";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getQuestionID } from "../../store/reducers/answer-slice";

import "./ViewItemStyle.css";

const ViewItem: React.FC = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.question.items);
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const [question, setQuestion] = useState<Question>();
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    questions.find((item) => {
      if (item.id === id) {
        setQuestion(item);
      }
    });
  }, [question]);

  const addAnswerHandler = () => {
    if (isAuth) {
      dispatch(getQuestionID(question!.id))
      navigation("/item_answer/_new");
    } else {
      navigation("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="view-page">
        <div className="view-container">
          <ViewQuestionComponent
            id={question?.id}
            userID={question?.userID}
            title={question?.title}
            description={question?.description}
            tag={question?.tag}
          />
          <div className="answers-title">Answers</div>
          <ListAnswerComponent questionID={question?.id} />
          <OkButton onClick={addAnswerHandler}>Add Answer</OkButton>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
