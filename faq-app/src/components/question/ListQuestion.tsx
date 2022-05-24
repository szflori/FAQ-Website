import React, { useContext } from "react";
import ViewQuestion from "./ViewQuestion";
import { QuestionContext } from "../../store/question-context";
import { AuthContext } from "../../store/auth-contex";

const ListQuestion: React.FC = (props) => {
  const questionCtx = useContext(QuestionContext);
  const authCtx = useContext(AuthContext);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return (
    <div className="main-wrapper">
      {questionCtx.items.map((item) => (
        <ViewQuestion
          key={item.id}
          id={item.id}
          answer={2}
          title={item.questionTitle}
          user={item.user.username!}
          creaDate={today}
        />
      ))}
    </div>
  );
};

export default ListQuestion;
