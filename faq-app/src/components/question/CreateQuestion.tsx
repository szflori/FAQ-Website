import React, { useRef, useContext } from "react";
import Question from "../../models/question";
import { QuestionContext } from "../../store/question-context";
import { AuthContext } from "../../store/auth-contex";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const CreateQuestion: React.FC = (props) => {
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
  };

  const cancelHandler = () => {
      
  };

  return (
    <Card size="">
      <h2>Ask Question</h2>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" ref={titleTextHandlerRef} />
        </div>
        <div className="form-group">
          <label>Body Text</label>
          <input type="text" ref={bodyTextHandlerRef} />
        </div>
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
