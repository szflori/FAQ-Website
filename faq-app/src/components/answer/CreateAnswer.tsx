import React, { useRef, useContext } from "react";
import Answer from "../../models/answer";
import Question from "../../models/question";
import { AnswerContext } from "../../store/answer-context";
import { AuthContext } from "../../store/auth-contex";
import { QuestionContext } from "../../store/question-context";
import Button from "../UI/Button/Button";
import TextField from "../UI/TextField/TextField";

const CreateAnswer: React.FC<{ onQuestion: Question, onShow: () => void }> = (props) => {
  const answerCtx = useContext(AnswerContext);
  const authCtx = useContext(AuthContext);
  const questionCtx = useContext(QuestionContext);
  const textBodyTextHandlerRef = useRef<HTMLInputElement>(null);

  const submitAnswerHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTextBody = textBodyTextHandlerRef.current!.value;
    const answer = new Answer(
      authCtx.profile!,
      props.onQuestion,
      enteredTextBody,
      2,
      2
    );

    answerCtx.onSave(answer);
    props.onShow();
  };

  const cancelAnswerHandler = () => {
    props.onShow();
  };
  return (
    <div>
      <form>
        <TextField
          onLabel="Text"
          onType="text"
          onInputText="Text"
          onRef={textBodyTextHandlerRef}
        />
        <div className="form-toggle">
          <Button type="outlined" onAction={submitAnswerHandler}>
            Add
          </Button>
          <Button type="outlined" onAction={cancelAnswerHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateAnswer;
