import React, { useRef, useContext } from "react";
import Answer from "../../models/answer";
import { AnswerContext } from "../../store/answer-context";
import { AuthContext } from "../../store/auth-contex";
import { QuestionContext } from "../../store/question-context";

const CreateAnswer: React.FC = () => {
  const answerCtx = useContext(AnswerContext);
  const authCtx = useContext(AuthContext);
  const questionCtx = useContext(QuestionContext);
  const textBodyTextHandlerRef = useRef<HTMLInputElement>(null);

  const submitAnswerHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTextBody = textBodyTextHandlerRef.current!.value;
    const answer = new Answer(authCtx.profile!, questionCtx.item!, enteredTextBody, 2, 2);

    answerCtx.onSave(answer);
  };
  return (
    <div>
      <form onSubmit={submitAnswerHandler}>
        <div className="form-group">
          <label>Text</label>
          <input type="text" ref={textBodyTextHandlerRef} />
        </div>
        <div className="form-toggle">
          <button type="submit">Add</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAnswer;
