import React, { useRef, useContext } from "react";
import Question from "../../models/question";
import { QuestionContext } from "../../store/question-context";
import { AuthContext } from "../../store/auth-contex";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import "./createquestion.css";
import TextField from "../UI/TextField/TextField";

const CreateQuestion: React.FC<{ onShow: () => void }> = (props) => {
  const questionCtx = useContext(QuestionContext);
  const authCtx = useContext(AuthContext);
  const titleTextHandlerRef = useRef<HTMLInputElement>(null);
  const bodyTextHandlerRef = useRef<HTMLInputElement>(null);

  const addQuestionHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTitle = titleTextHandlerRef.current!.value;
    const enteredBodyText = bodyTextHandlerRef.current!.value;
    const question = new Question(
      authCtx.profile!,
      enteredTitle,
      enteredBodyText
    );

    questionCtx.onSave(question);
    console.log(JSON.stringify(question));
    props.onShow();
  };

  const cancelHandler = () => {
    props.onShow();
  };

  return (
    <Card>
      <h2>Ask Question</h2>
      <form className="form-wrapper">
        <TextField
          onLabel="Title"
          onType="text"
          onInputText="Title"
          onRef={titleTextHandlerRef}
        />
        <TextField
          onLabel="Body Text"
          onType="text"
          onInputText="Body Text"
          onRef={bodyTextHandlerRef}
        />
        <div className="form-toggle">
          <Button type="contained" onAction={addQuestionHandler}>
            Ask
          </Button>
          <Button type="outlined" onAction={cancelHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateQuestion;
