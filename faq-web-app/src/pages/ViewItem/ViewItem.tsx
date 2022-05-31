import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListAnswerComponent from "../../components/Answer/ListAnswerComponent";
import Navbar from "../../components/Navbar/Navbar";
import ViewQuestionComponent from "../../components/Question/ViewQuestionComponent";
import { Question } from "../../models/question";
import { AnswerContext } from "../../store/answer-context";
import { AuthContext } from "../../store/auth-context";
import { QuestionContext } from "../../store/question-context";

const ViewItem: React.FC = () => {
  const questionCtx = useContext(QuestionContext);
  const answerCtx = useContext(AnswerContext);
  const authCtx = useContext(AuthContext);
  const [question, setQuestion] = useState<Question>();
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    questionCtx.items.find((item) => {
      if (item.id === id) {
        setQuestion(item);
      }
    });
  }, [question]);

  const addAnswerHandler = () => {
    if (authCtx.isLoggedIn) {
      answerCtx.onGetQuestionID(question!.id);
      navigation("/item_answer/_new");
    } else {
      navigation("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <ViewQuestionComponent
        id={question?.id}
        userID={question?.userID}
        title={question?.title}
        description={question?.description}
      />
      <ListAnswerComponent questionID={question?.id} />
      <button onClick={addAnswerHandler}>Add Answer</button>
    </div>
  );
};

export default ViewItem;